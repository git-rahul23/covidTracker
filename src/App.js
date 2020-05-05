import React, { Component } from "react";
import "./App.css";
import ClippedDrawer from "./Components/SideDrawer";
import ResponsiveDrawer from "./Components/ResponsiveDrawer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import GlobalTracker from "./Pages/GlobalTracker";

import {fetchData} from './api';

class App extends Component {

  state = {
    data : {},
    mainData :{},
    country : '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData, mainData : fetchedData});
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country : country});
    console.log(fetchedData);
  }
  render() {

    const {data, mainData, country} = this.state;
    return (
      <BrowserRouter>
        <ResponsiveDrawer mainData ={mainData} data= {data} handleCountryChange={this.handleCountryChange}>
          <Switch>
            <Route path="/" exact component={Home}/>
           <Route path="/globaltracker" render={(props) => <GlobalTracker {...props} data={data} country={country}/> }/>
          </Switch>
        </ResponsiveDrawer>
      </BrowserRouter>
    );
  }
}

export default App;
