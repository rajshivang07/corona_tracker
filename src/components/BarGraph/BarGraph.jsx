import React, { useState, useEffect, Component } from "react";
import Chart from "react-apexcharts";
import styles from './BarGraph.module.css';
import { fetchData} from '../../api';


const BarGraph= ({data:{confirmed, recovered, deaths, lastUpdate}}) =>{
    if(!confirmed){
        return 'Loading..';
    }
      const a=confirmed.value- deaths.value- recovered.value;
     
      //console.log(activeCases);
      var b=recovered.value;
      //console.log(a);
      var c=deaths.value;
      //var a=5; 
      //var b=8; 
      //var c=9;
     
      const state = {
      
        series: [{
          name: 'Active',
          label: 'Active',
          backgroundColor:'#00000080',
          
          data: [a],
        }, {
          name: 'Recovered',
          label: 'Recovered',
          backgroundColor: '#00ff00',
          data: [b]
        }, {
          name: 'Deaths',
          label: 'Deaths',
          backgroundColor: '#ff0000',
          data: [c]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 130,
            stacked: true,
            stackType: '100%'
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          stroke: {
            width: 1,
            colors: ['#00000080','#00ff00','#ff0000']
          },
          
          xaxis: {
            categories: ["As of "+ new Date(lastUpdate).getDate()+ "-" +(new Date(lastUpdate).getMonth()+ 1) + "-" +new Date(lastUpdate).getFullYear()],
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val 
              }
            }
          },
          fill: {
            opacity: 1,
            
          
          },
          legend:{
              label:{
                backgrounColors: ['#00000080','#00ff00','#ff0000']
              }
          }
        },
      
      
      };
    

  

    
      return (
        

  <div className={styles.container}>
    <Chart options={state.options} series={state.series} type="bar" height={130} />
</div>


      );
    
  }
  export default BarGraph;