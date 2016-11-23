import React from "react";

export default class Journals extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  render() {
　　　 var d = [];
    if(this.props.data.length !== 0){
    d = this.props.data.data.data.books;
    }
    console.log(d)
    return(
    <div>
     {
        d.map(function(r){
	return [
        <a>{r.title}</a>
        ]
        })}
    </div>
    )
  }
}
