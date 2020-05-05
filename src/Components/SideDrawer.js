import React from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import {Drawer,AppBar, CssBaseline,Toolbar,List,
     Typography, Divider, ListItem,
     ListItemIcon, ListItemText} from '@material-ui/core';
import Countup from 'react-countup';
import Country from "./Country/Country";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "100px"
  },
}));

const ClippedDrawer = ({children, mainData : {confirmed, recovered, deaths, lastUpdate}, handleCountryChange}) => {
  const classes = useStyles();

  if(!confirmed)
    return 'Loading...';



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            COVID 19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem>
                <div>
                    <div>Total confirmed cases</div>
                    <div>{lastUpdate.substring(11,19)}</div>
                    <div><Countup 
                            start ={0}
                            end ={confirmed.value}
                            duration="0.75"
                            separator=",">
                        </Countup></div>
                    <div>
                     <Countup 
                            start ={0}
                            end ={confirmed.value - recovered.value - deaths.value}
                            duration="0.75"
                            separator=",">
                        </Countup> : Active Cases
                    </div>
                    <div>
                     <Countup 
                            start ={0}
                            end ={recovered.value} 
                            duration="0.75"
                            separator=",">
                        </Countup> : Recovered Cases
                    </div>
                    <div>
                     <Countup 
                            start ={0}
                            end ={deaths.value} 
                            duration="0.75"
                            separator=",">
                        </Countup> : Fatal Cases
                    </div>
                    
                </div>
            </ListItem>
            <ListItem component={Link} to="/globaltracker">
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Global Tracker" />
            </ListItem>

            <ListItem>
              <Country handleCountry = {handleCountryChange}/>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
}

export default ClippedDrawer;