import React from 'react';
import LineChart from './LineChart';
import Interface from './Interface';
import './App.css';

export default class HRView extends React.Component {
  constructor(props) {
    super();

    this.state = {
            users: null,
	    userList: null,
    };

    var inter = new Interface();
    var callback = (x) => this.setState({userList: x});
    var callback2 = (x) => this.setState({users: x});
	 inter.getUsers().then(
		  function(res) {
			  console.log(res);
			  callback(res.data);
			  var userList = res.data;
	inter.getReactions().then(
      function(res) {
          var users = {};
        for (var i = 0; i < res.data.length; i++) {
          if (!users[res.data[i].user]) {
            users[res.data[i].user] = {name: userList[res.data[i].user-1]['username'], reactions: []};
          }
          users[res.data[i].user].reactions.push({
                        mood: res.data[i].mood,
                        time: (Date.parse(res.data[i].time_of_reaction) - Date.parse("2020-01-25"))/1000/60/60 - 18,
                    });
        }
	      var userArr = [];
	      for (var u in users) {
		      userArr.push(users[u]);
	      }
	      callback2(userArr);

      },
      function(res) {
        console.log("HR, FAILED!");
	      console.log(res);
      }
    )
		  },
		  function(res) {
			  console.log(res);
		  }
	  );


    
  }

  render() {
    var out = <h1>Loading...</h1>;
	  console.log(this.state.users);
    if (this.state.users) {
      out = <div>
        <div className="textMargin">
        <h1> Hello Mark! </h1>
        <p> Insights: Overall, employee <b>sleep patterns</b> are improving dramatically but feelings of <b>purpose and fufillement</b> is still low. 
        </p>
        <p> Disilusionment is a major contributor to burnout. Try hosting an event to foster innovation such as an internal hackathon.
        </p>
        </div>
          {this.state.users.map((user) => (<LineChart name={user.name} reactions={user.reactions}/>))}
        </div>;
      }
    return(out);
  }
}
