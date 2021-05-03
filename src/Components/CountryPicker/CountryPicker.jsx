import React ,{useState, useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import {fetchcountries} from '../../api';


const CountryPicker = ({handleCountryChange}) => {

     const [fetchedcountries,setfetchedcountries] = useState([]);

     useEffect(()=>{
         const fetchAPI= async () =>{
           setfetchedcountries(await fetchcountries());
         }
         fetchAPI();
     },[setfetchedcountries]);

    return (
       <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
               <option value="">Global</option>
               {fetchedcountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
     );
}
 
export default CountryPicker;
