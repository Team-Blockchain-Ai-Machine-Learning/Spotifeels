import React from 'react';
import LineChart from './LineChart';
import Interface from './Interface';

export default class HRView extends React.Component {
  constructor(props) {
    super();

    this.state = {
            i: new Interface(),
            users: null,
    };

    this.state.i.getReactions().then(
      function(res) {
        for (var i = 0; i < res.data.length; i++) {
          var users = {};
          if (!users[res.data[i].user]) {
            users[res.data[i].user] = {name: "UsEr NaMe", reactions: []};
          }
          users[res.data[i].user].reactions.push({
                        mood: res.data[i].mood,
                        time: (Date.parse(res.data[i].time_of_reaction) - Date.parse("2020-01-25"))/1000/60/60 - 18,
                    });
        }

      },
      function(res) {
        console.log("HR, FAILED!");
      }
    )

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
    if (this.state.users) {
      out = <div>
          {this.state.users.map((user) => (<LineChart name={user.name} reactions={user.reactions}/>))}
        </div>;
      }
    return(out);
  }
}