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

export default class ManagerView extends React.Component {
  state = { 
    center: null
  };

  render() {
    return(
        <LineChart reactions={reactions} />
    );
  }
}