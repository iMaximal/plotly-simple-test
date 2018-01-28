import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import { miniData } from './miniData';

class Main extends Component {


  render() {
    const xCoords = [];
    const yCoords = [];

    const timeConverter = (timestamp) => {
      const a = new Date(timestamp);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const year = a.getFullYear();
      const month = months[a.getMonth()];
      const date = a.getDate();
      const hour = a.getHours();
      const min = a.getMinutes();
      const sec = a.getSeconds();
      const time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
      return time;
    };

    miniData.forEach((item) => {
      xCoords.push(item.time);
      // xCoords.push(timeConverter(item.time));
      yCoords.push(item['10:Hz']);
    });

    const data = [
      {
        type: 'scatter',
        mode: 'lines',
        x: xCoords,
        y: yCoords,
        marker: { color: '#35ccc1' },
      },
    ];

    const layout = {
      showlegend: true,
      width: 1800,
      height: 600,
    };

    return (
      <Plot
        // data={[
        //   {
        //     type: 'scatter',
        //     mode: 'lines+points',
        //     x: [1, 2, 3],
        //     y: [2, 6, 3],
        //     marker: { color: 'red' },
        //   },
        // ]}
        data={data}

        // layout={{
        //   width: 1900,
        //   height: 800,
        //   title: 'A Fancy Plot [AlteroSmart project]',
        // }}

        layout={layout}

      />
    );
  }
}

export default Main;
