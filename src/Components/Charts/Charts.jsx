import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';



const Chart = ( {data: { confirmed, recovered, deaths }, country}) => {

    const [dailyData,setDailyData] = useState([]);

  useEffect(()=>{

   const fetchAPI = async () =>{
        setDailyData (await fetchDailyData());
      }
      fetchAPI();
  },[]);
 
  const Barchart =(
    confirmed?(
        <Bar
        data={{
         labels:['Infected','Deaths','Recovered'],
         datasets:[{
             label:'People',
             backgroundColor:[
                 'rgba(0,0,255,0.5)',
                 'rgba(0,255,0,0.5)',
                 'rgba(255,0,0,0.5)'
             ],
             data:[confirmed,recovered,deaths]
         }]
        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`Current State in ${country}`}
        }}
        />
    ):null
)



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
        
            {country?Barchart:lineChart}
        </div>
     );
}
 
export default Chart;
