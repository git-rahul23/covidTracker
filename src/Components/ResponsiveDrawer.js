import React from "react";

import Countup from "react-countup";
import Country from "./Country/Country";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";

import covidLogo from '../assets/covidLogo.png';
import "./ResponsiveDrawer.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "white",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "white",
      boxShadow: "0 0 0 0",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logoWrapper : {
    width : "100%",
    textAlign : "center",
  },
  covidLogo : {
    height: "60px",
    width : "250px"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "white",
  },
  content: {
    flexGrow: 1,
    padding: "50px",
    marginTop: "50px",
    backgroundColor: "#FBFBFB",
    height: "100vh",
  },
  mainList: {
    width: "100%",
    padding: "0",
  },
  mainListDiv: {
    width: "100%",
  },
  totText: {
    fontSize: "25px",
    color: "#278BAF",
    fontWeight: "bold",
    marginBottom: "10px",
    paddingLeft: "16px",
  },
  mainText: {
    fontSize: "22px",
    fontWeight: "600",
    paddingLeft: "16px",
  },
  dateText: {
    fontSize: "18px",
    opacity: "0.75",
    paddingLeft: "16px",
  },
  numberValueText: {
    width: "100%",
    fontSize: "16px",
    padding: "7px 16px",
    display: "flex",
  },
  activeLegend: {
    width: "8px",
    height: "8px",
    borderRadius: "8px",
    backgroundColor: "#C0504D",
    marginTop: "6px",
    marginRight: "10px",
  },
  recovLegend: {
    width: "8px",
    height: "8px",
    borderRadius: "8px",
    backgroundColor: "#9BBB59",
    marginTop: "6px",
    marginRight: "10px",
  },
  deathLegend: {
    width: "8px",
    height: "8px",
    borderRadius: "8px",
    backgroundColor: "#4C5C73",
    marginTop: "6px",
    marginRight: "10px",
  },

  globalText: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "white",
    fontWeight : "600",
    fontSize: "19px",
    padding: "7px 0",
    marginTop : "20px"
  },
}));

const ResponsiveDrawer = ({
  children,
  mainData: { confirmed, recovered, deaths, lastUpdate },
  handleCountryChange,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!confirmed) return "Loading...";

  const { window } = confirmed;
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem className={classes.mainList}>
          <div className={classes.mainListDiv}>
            <div className={classes.mainText}>Total Cases</div>
            <div className={classes.dateText}>
              {lastUpdate.substring(11, 19)}
            </div>
            <div className={classes.totText}>
              <Countup
                start={0}
                end={confirmed.value}
                duration="0.75"
                separator=","
              ></Countup>
            </div>
            <div className={classes.numberValueText}>
              <div className={classes.activeLegend}></div>
              <div>
                <Countup
                  start={0}
                  end={confirmed.value - recovered.value - deaths.value}
                  duration="0.75"
                  separator=","
                ></Countup>
                &nbsp; Active
              </div>
            </div>
            <div className={classes.numberValueText}>
              <div className={classes.recovLegend}></div>
              <div>
                <Countup
                  start={0}
                  end={recovered.value}
                  duration="0.75"
                  separator=","
                ></Countup>
                &nbsp; Recovered
              </div>
            </div>
            <div className={classes.numberValueText}>
              <div className={classes.deathLegend}></div>
              <div>
                <Countup
                  start={0}
                  end={deaths.value}
                  duration="0.75"
                  separator=","
                ></Countup>
                &nbsp;&nbsp;&nbsp;&nbsp; Fatal
              </div>
            </div>
          </div>
        </ListItem>
        <ListItem
          component={Link}
          to="/globaltracker"
          className={classes.globalText}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Global Tracker" />
        </ListItem>

        <ListItem>
          <Country handleCountry={handleCountryChange} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            +
          </IconButton>
          <div className={classes.logoWrapper}>
            <img component={Link} to="/" src={covidLogo}  className={classes.covidLogo}/> 
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default ResponsiveDrawer;
