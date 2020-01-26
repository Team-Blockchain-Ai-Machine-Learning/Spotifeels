import React, { useCallback } from 'react';

import LineChart from './LineChart';
import Interface from './Interface';
import './App.css';

export default class ManagerView extends React.Component {
    constructor(props) {
        super();

        this.state = {
            i: new Interface(),
            reactions: [1],
        };

        var callback = (x) => (this.setState({reactions: x}));
        this.state.i.getReactions().then(
            function(res) {
                var reactions = [];
                for (var i = 0; i < res.data.length; i++) {
                    reactions.push({
                        mood: res.data[i].mood,
                        time: (Date.parse(res.data[i].time_of_reaction) - Date.parse("2020-01-25"))/1000/60/60 - 18,
                    });
                }
                callback(reactions);
                // TODO: we need to smooth this :P.
            },
            function(res) {
                console.log("COULD NOT GET REACTIONS!")
		    console.log(res);
            }
        )
    }

  render() {
       var out = <h1>Loading...</h1>;
       if (this.state.reactions.length)
       
        out =  <div className="divBody"> 
        <div className="textMargin">
        <h1> Hello Paul! </h1>
        <p> Insights: Your team's <b>motivation</b> is at an all-time high but their sense of <b>connection to their coworkers</b> is down 32% this week. 
        </p>
        <p> Social isolation at work can cause burnout. Try a community-buiding activity like an escape room! 
        </p>
        </div>
        <LineChart reactions={this.state.reactions} /> </div>;
    return(
       out
    );
  }
}
