import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <span
          style={{ marginLeft: "20px", fontWeight: "700", fontSize: "21px" }}
        >
          Manage Domain
        </span>
        <span style={{ float: "right", marginRight: "20px" }}>
          <Button onClick={handleOpen} variant="contained">
            ADD DOMAIN
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add New Domain
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Domain/Subdomain
              </Typography>
              {/* <input type="text" placeholder='ex: www.domain.com, subdomain.domain.com' style={{marginTop:"20px", height:"20px", width:"350px"}} /> */}
              <TextField
                label="ex: www.domain.com, subdomain.domain.com"
                fullWidth
                variant="outlined"
                size="small"
              ></TextField>
              <br></br>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "20px",
                }}
              >
                <Stack spacing={2} direction="row">
                  <Button variant="contained">create</Button>
                  <Button onClick={handleClose} variant="outlined">
                    cancel
                  </Button>
                </Stack>
              </div>
            </Box>
          </Modal>
        </span>
      </div>
      <div style={{ marginLeft: "20px", marginTop: "10px" }}>
        You can add, export, edit and delete your domain.
      </div>
    </>
  );
};

export default Header;
