import React, { useEffect, useState } from "react";
import { usersList, usersDelete, usersUpdate } from "../Api";
import { connect } from "react-redux";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

export function UserDetails({
  usersList,
  usersDelete,
  usersUpdate,
  Data: { userList },
}) {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    usersList();
  }, []);

  const handleEdit = (id) => {
    userList.map((item) => {
      if (item.id == id) {
        setUserData(item);
      }
    });
    setOpen(true);
  };

  const handleUpdate = () => {
    usersUpdate(userData);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    usersDelete(id);
  };

  const handleOnChange = (e) => {
    if (
      e.target.id == "street" ||
      e.target.id == "city" ||
      e.target.id == "zipcode"
    ) {
      setUserData({
        ...userData,
        address: { ...userData.address, [e.target.id]: e.target.value },
      });
    } else {
      setUserData({ ...userData, [e.target.id]: e.target.value });
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update User Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={(e) => handleOnChange(e)}
            variant="standard"
            value={userData.name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="UserName"
            type="text"
            fullWidth
            onChange={(e) => handleOnChange(e)}
            variant="standard"
            value={userData.username}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            onChange={(e) => handleOnChange(e)}
            variant="standard"
            value={userData.email}
          />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                id="street"
                label="street"
                type="text"
                fullWidth
                onChange={(e) => handleOnChange(e)}
                variant="standard"
                value={userData && userData.address && userData.address.street}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                id="city"
                label="City"
                type="text"
                fullWidth
                onChange={(e) => handleOnChange(e)}
                variant="standard"
                value={userData && userData.address && userData.address.city}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                id="zipcode"
                label="Zipcode"
                type="text"
                fullWidth
                onChange={(e) => handleOnChange(e)}
                variant="standard"
                value={userData && userData.address && userData.address.zipcode}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button id='updateBtn' onClick={() => handleUpdate()}>Update</Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList &&
              userList.length > 0 &&
              userList.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.username}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    {item.address.street +
                      "," +
                      item.address.city +
                      "," +
                      item.address.zipcode}
                  </TableCell>
                  <TableCell>
                    <Button id='editBtn' onClick={() => handleEdit(item.id)}>Edit</Button>
                    <Button id='deleteBtn' onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Data: state.usersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    usersList: () => dispatch(usersList()),
    usersDelete: (id) => dispatch(usersDelete(id)),
    usersUpdate: (userData) => dispatch(usersUpdate(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
