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
	console.log(j.id)
	return <JournalRow key={j.id} data={j} />
})
　　　　console.log('getting rows');
    console.log(rows);
   return <tbody>
		{rows}
	</tbody>
  }
}


