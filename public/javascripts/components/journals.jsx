import React from "react";
import JournalRow from './journalrow';

export default class Journals extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  render() {
    let rows = this.props.data.map(j => {
	return <JournalRow data={j} />
})
    console.log(rows);
   return <tbody>
		{rows}
	</tbody>
  }
}


