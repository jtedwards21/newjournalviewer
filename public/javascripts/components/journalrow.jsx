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
    <td className="text-center"><a href={this.props.data.bookUrl}><img className="img-thumbnail small-image" src={this.props.data.headImage} /></a></td>
    <td className="text-center"><a className="table-text"　ref={this.props.data.bookUrl}>{this.props.data.title}</a></td>
    <td className="text-center"><span className="table-text">{this.props.data.userName}</span></td>
    <td className="text-center"><span className="table-text">{this.props.data.startTime}</span></td>
    <td className="text-center"><span className="table-text">{this.props.data.routeDays}</span></td>
  </tr>
  }
}


