import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Menu } from "../components/Menu";
import MainToolbar from "../components/MainToolbar";
import makeStyles from "@mui/styles/makeStyles";
import { RosControl, RosContext } from "../components/RosControl";
import DeviceList from "../components/DeviceList";
import { Paper, Grid, Box } from "@mui/material";
import { CameraWebRTCV4 } from "../components/CameraWebRTCV4";

import { useDispatch, useSelector } from "react-redux";
import { experimentalStyled as styled } from "@mui/material/styles";
const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
  sidebarStyle: {
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: 0,
    top: "88px",
    height: `calc(100% - 88px)`,
    width: "360px",
    margin: "0px",
    zIndex: 3,
  },
  middleStyle: {
    flex: 1,
    display: "grid",
  },
  contentListStyle: {
    pointerEvents: "auto",
    gridArea: "1 / 1",
    zIndex: 4,
  },
}));

const showToast = (type, description) => {
  switch (type) {
    case "success":
      toastProperties = {
        id: list.length + 1,
        title: "Success",
        description: description,
        backgroundColor: "#5cb85c",
      };
      break;
    case "danger":
      toastProperties = {
        id: list.length + 1,
        title: "Danger",
        description: description,
        backgroundColor: "#d9534f",
      };
      break;
    case "info":
      toastProperties = {
        id: list.length + 1,
        title: "Info",
        description: description,
        backgroundColor: "#5bc0de",
      };
      break;
    case "warning":
      toastProperties = {
        id: list.length + 1,
        title: "Warning",
        description: description,
        backgroundColor: "#f0ad4e",
      };
      break;
    default:
      toastProperties = [];
  }
  setList([...list, toastProperties]);
};
const CameraPage = () => {
  const [AddUAVOpen, SetAddUAVOpen] = useState(false);
  const devices = useSelector((state) => state.devices.items);
  let listdevices = Object.values(devices);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RosControl notification={showToast}>
        <Navbar />
        <Menu />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: `calc(100vh - 90px)`,
          }}
        >
          <Box
            sx={{ flexGrow: 1 }}
            style={{
              backgroundColor: "#000000",
              width: `calc(100vw - 360px)`,
              height: "100%",
              padding: "20px",
              float:"right"
            }}
          >
            <Grid container spacing={3}>
              <Grid item >
              <CameraWebRTCV4 />
              </Grid>
              <Grid item >
              <CameraWebRTCV4 />
              </Grid>
              <Grid item >
                <CameraWebRTCV4 />
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className={classes.sidebarStyle}>
          <div className={classes.middleStyle}>
            <Paper square className={classes.contentListStyle}>
              <MainToolbar SetAddUAVOpen={SetAddUAVOpen} />
              <DeviceList devices={listdevices} />
            </Paper>
          </div>
        </div>
      </RosControl>
    </div>
  );
};

export default CameraPage;