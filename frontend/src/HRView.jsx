import React from 'react';
import LineChart from './LineChart';

var reactions = [
    {
        mood: 50,
        note: "I hate my life",
        time: 9
    },
    {
        mood: 100,
        note: "My boss hit on me",
        time: 10
    },
    {
        mood: 0,
        note: "He told me it was a joke",
        time: 10.1
    },
    {
        mood: 75,
        note: "Lunch with Jane",
        time: 12
    },
    {
        mood: 25,
        note: "So many emails",
        time: 14
    },
    {
        mood: 90,
        note: "I get to go home!",
        time: 17
    },
];


export default class HRView extends React.Component {
  constructor(props) {
    super();
    var users = [];
    for (var i = 0; i < 10; i++) {
      users.push({name: "name"+i, reactions: reactions})
    }
    this.state = { 
      users: users
    };
  }

  render() {
    return(
      <div>
        {this.state.users.map((user) => (<LineChart name={user.name} reactions={user.reactions}/>))}
      </div>
    );
  }
}