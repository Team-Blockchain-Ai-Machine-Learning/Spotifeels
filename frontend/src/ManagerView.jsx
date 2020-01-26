import React, { useCallback } from 'react';

import LineChart from './LineChart';
import Interface from './Interface';

export default class ManagerView extends React.Component {
    constructor(props) {
        super();

        this.state = {
            i: new Interface(),
            reactions: [],
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
            }
        )
    }

  render() {
       var out = <h1>Loading...</h1>;
       if (this.state.reactions.length)
        out = <LineChart reactions={this.state.reactions} />;
    return(
       out
    );
  }
}