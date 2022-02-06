import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutComponent from './components/LayoutComponent/LayoutComponent';


class App extends Component{

  render() {
    return(
    
    <LayoutComponent>
    <div>Children</div>
    </LayoutComponent>
        );
}
}

export default App;
