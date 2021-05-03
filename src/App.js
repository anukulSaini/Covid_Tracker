import React from 'react';

import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchdata} from './api';


class App extends React.Component {

  state ={
    data:{},
    country:'',
  }

async componentDidMount(){
  const fetcheddata = await fetchdata();
  
  this.setState({data:fetcheddata});
}

handleCountryChange = async(country)=>{
  const fetcheddata = await fetchdata(country);
  this.setState({data:fetcheddata,contry:country});


}


render ()  {
  const {data,country} = this.state;
  return (
    <div >
      <h1>
        <Cards data = {data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data ={data} country={country}/>
      </h1>
    </div>
  );
}
}

export default App;




