import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';



const Chart = () => {

    const [dailyData,setDailyData] = useState([]);

  useEffect(()=>{

   const fetchAPI = async () =>{
        setDailyData (await fetchDailyData());
      }
      fetchAPI();
  });
 

  const lineChart =(
      dailyData.length
     ?(<Line
     data={{
        //  labels:dailyData.map(({date})=>date),
        labels: dailyData.map(({ reportDate }) => new Date(reportDate).toDateString()),
         datasets:[{
             data:dailyData.map(({confirmed})=>confirmed),
            // data: dailyData.map((data) => data.confirmed),
             label:'Infected',
             borderColor:'#3333ff',
             fill:true
         },{
            data:dailyData.map(({deaths})=>deaths),
            label:'Deaths',
            borderColor:'red',
            backgroundColor:'rgba(255,0,0,0.5)',
            fill:true
         }],
     }}
     />):null
  );


    return ( 
        <div className={styles.container}>
            {lineChart}
        </div>
     );
}
 
export default Chart;