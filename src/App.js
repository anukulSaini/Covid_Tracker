import React from 'react';

import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchdata} from './api';


class App extends React.Component {

  state ={
    data:{}
  }

async componentDidMount(){
  const fetcheddata = await fetchdata();
  

  
  this.setState({data:fetcheddata});
}

render ()  {
  const {data} = this.state;
  return (
    <div >
      <h1>
        <Cards data = {data}/>
        <CountryPicker/>
        <Charts/>
      </h1>
    </div>
  );
}
}

export default App;
