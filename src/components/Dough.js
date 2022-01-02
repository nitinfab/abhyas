import Chart from "react-apexcharts";
import React, { Component } from 'react'

class Dough extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series : [30, 30, 30, 10],
        options: {
          chart: {
            type: 'donut'
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
          <Chart options={this.state.options} series={this.state.series} type="donut" />
      );
    }
    }  
export default Dough;