import React from "react";

export default class JournalRow extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  render() {
　　  return <tr>
    <td>{props.data.title}</td>
    <td>{props.data.userName}</td>
    <td>{props.data.startTime}</td>
    <td>{props.data.routeDays}</td>
  </tr>
  }
}


