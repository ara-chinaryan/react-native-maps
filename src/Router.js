import React from "react";
import {Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import MapComponent from "./components/MapComponent";

const RouterComponent = () => {

    return (
      <Router>
        <Stack key={'root'}>
            <Scene key={'login'} component={LoginForm} title={'Please Login'}/>
            <Scene key={'employee'} component={EmployeeList} title={'Employees'}/>
            <Scene key={'map'} component={MapComponent} title={'Map'} initial/>
        </Stack>
      </Router>
    );

}

export default RouterComponent;
