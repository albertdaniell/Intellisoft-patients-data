import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Appnav from './components/Appnav'
import Patinets from './components/Patients'

import ChartDisplay from './components/ChartDisplay'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Appnav></Appnav>
                <div className="App">
                    <Patinets></Patinets>
                    <ChartDisplay></ChartDisplay>
                </div>
            </div>
        );
    }
}

export default App;
