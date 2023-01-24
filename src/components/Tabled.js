import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import {
  Button,
  Typography,
  IconButton,
  Stack,
  Divider,
  Paper,
  TextField,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Popover from "@mui/material/Popover";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import Modal from "@mui/material/Modal";
import style from "./table.module.css";


// hjhchkchk
const CustomStatusCell = () => {
  const [isOn, setIsOn] = useState(false);

  const handleChange = (e) => {
    const val = e.target.checked;
    setIsOn(val);
  };
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
      checked={isOn}
      onChange={handleChange}
    />
  ))(({ theme }) => ({
    width: 44,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#1890ff",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 25,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} />;
};

const CustomTrackingCell = (props) => {
  console.log(93, props.row);
  return (
    <>
      {props.row.scriptInstall === "Installed" ? (
        <>
          <CheckCircleIcon sx={{ color: "green" }} />
          <div style={{ marginLeft: "20px" }}>Already Installed</div>
        </>
      ) : (
        <>
          <ErrorIcon sx={{ color: "red" }} />
          <div style={{ marginLeft: "20px" }}>Not Installed</div>
        </>
      )}
    </>
  );
};

const CustomActionCell = (props) => {
  // console.log(props.row)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const [updateValue, setUpdateValue] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseEdit = () => setOpen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openEl = Boolean(anchorEl);
  const id = openEl ? "simple-popover" : undefined;

  return (
    <>
      <div
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        <Typography variant="h4">...</Typography>
      </div>
      
      {anchorEl && (
        <div style={{ marginLeft: "200px" }}>
          <Popover
            id={id}
            open={openEl}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "middle",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <div>
                <Button
                  variant="text"
                  startIcon={<EditIcon />}
                  disableRipple
                  onClick={(e) => {
                    // console.log(props.row)
                    setUpdateValue(props.row);
                    handleOpen();
                  }}
                >
                  Edit
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Edit Domain<br></br>
                      <div style={{ fontSize: "18px", marginTop: "20px" }}>
                        Domain name
                      </div>
                      <TextField
                        value={updateValue?.domainname}
                        fullWidth
                        variant="outlined"
                        size="small"
                      ></TextField>
                      <div style={{ fontSize: "18px", marginTop: "15px" }}>
                        Tracking
                      </div>
                      <TextField
                        value={updateValue?.scriptInstall}
                        fullWidth
                        variant="outlined"
                        size="small"
                      ></TextField>
                      <div style={{ fontSize: "18px", marginTop: "15px" }}>
                        Status
                      </div>
                      <TextField
                        value={updateValue?.status}
                        fullWidth
                        variant="outlined"
                        size="small"
                      ></TextField>
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "20px",
                      }}
                    >
                      <Stack spacing={2} direction="row">
                        <Button variant="contained">Edit</Button>
                        <Button onClick={handleClose} variant="outlined">
                          cancel
                        </Button>
                      </Stack>
                    </div>
                  </Box>
                </Modal>
              </div>
              <div>
                <span>
                  <DownloadIcon />
                </span>
                <span style={{ marginLeft: "10px" }}>Install Script</span>
              </div>
              <div>
                <span>
                  <DeleteIcon />
                </span>
                <span style={{ marginLeft: "10px" }}>Delete</span>
              </div>
            </Typography>
          </Popover>
        </div>
      )}
    </>
  );
};

const Tabled = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      domainname: "connect.domains.google.com",
      // tracking: "Not Installed",
      scriptInstall: "Not Installed",
      status: true,
    },
    {
      id: 2,
      domainname: "userlove.test.in",
      // tracking: "Already Installed",
      scriptInstall: "Installed",
      status: false,
    },
    {
      id: 3,
      domainname: "tracking.user.com",
      // tracking: "Already Installed",
      scriptInstall: "Installed",
      status: true,
    },
    {
      id: 4,
      domainname: "design.creation.com",
      // tracking: "Not Installed",
      scriptInstall: "Not Installed",
      status: true,
    },
    {
      id: 5,
      domainname: "userlove.dev",
      // tracking: "Not Installed",
      scriptInstall: "Not Installed",
      status: true,
    },
    {
      id: 6,
      domainname: "userlove.net",
      // tracking: "Installed",
      scriptInstall: "Installed",
      status: true,
    },
  ]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const columns = [
    {
      field: "id",
      headerName: "id",
    },
    {
      field: "domainname",
      headerName: "DOMAINNAME",
      width: 350,
    },
    {
      field: "tracking",
      headerName: "TRACKING",
      renderCell: CustomTrackingCell,
      width: 300,
    },
    {
      field: "status",
      headerName: "STATUS",
      renderCell: CustomStatusCell,
      width: 200,
    },
    {
      field: "action",
      headerName: "ACTION",
      renderCell: CustomActionCell,
      width: 210,
    },
  ];
  return (
    <Stack direction="row">
      <Box sx={{ height: 400, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          // disableSelectionOnClick
          pageSize={5}
          rowsPerPageOptions={[5]}
          pagination={false}
          count={10}
          classes={{
            columnHeader: style["table-header"],
            rows: style.row,
            cell: style.cell,
          }}
        />
        {/* <Typography fontSize={32} align="center">
                Page: {page}    
            </Typography> */}
        {/* <div style={{ marginLeft: "450px" }}> */}
        {/* <Pagination
            count={10}
            page={page}
            onChange={handleChange}
          ></Pagination> */}
        {/* </div> */}
      </Box>
    </Stack>
  );
};

export default Tabled;
