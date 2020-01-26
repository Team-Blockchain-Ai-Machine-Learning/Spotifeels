import React from 'react';
import Plot from 'react-plotly.js';


export default class LineChart extends React.Component {
    constructor(props) {
        super();
        var x = [];
        var y = [];
        var text = [];

        for (var i = 0; i < props.reactions.length; i++) {
          x.push(props.reactions[i].time);
          y.push(props.reactions[i].mood);
          text.push(props.reactions[i].note);
        }

        this.state = {
            x: x,
            y: y,
            text: text,
            title: props.name || "Team",
        }
    }

    render() {
        return (
            <Plot
              data={[
                {
                  x: this.state.x,
                  y: this.state.y,
                  type: 'scatter',
                  mode: 'lines+markers',
                  fill: 'tozeroy',
                  line: {'shape': 'spline', 'smoothing': 1.3},
                  marker: {color: '#00aaff'},
                  text: this.state.text,
                },
              ]}
              layout={ {
                width: 1300, 
                height: 400, 
                title: this.state.title,
                xaxis: {
                  range: [9, 17]
                },
                yaxis: {
                  range: [-1, 101]
                },
              } }
            />
        );
    }
}