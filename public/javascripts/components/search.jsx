import React from "react";
import Journals from './journals';
import axios from 'axios';


export default class Search extends React.Component {
  makeUrl(query){
    return '/journals/search/' + query
  }
  UpdateInputValue(evt){
    this.setState({query: evt.target.value, data: []})
    console.log(this.state.query);
    }
  Search(event) {
    console.log("search");
    var url = this.makeUrl(this.state.query)
    axios.get(url)
    .then(data => this.setState({data}));
  }
  constructor() {
    super();
    this.state = {
      query: "",
      data: []
    };
  }
  render() {
//Maybe there's a better way to render the bottom with bootstrap
    return (
      <div className="row">
	<div className="col-md-6 col-md-offset-3 input-group">
          <span className="input-group-btn">
	    <button className="btn btn-default"  onClick={this.Search.bind(this)} type="button">Go!</button>
          </span>
          <input className="form-control" type="text" value={this.state.query} onChange={this.UpdateInputValue.bind(this)}/>
	</div>
        <div className="label-container">
        <div className="col-md-2 col-md-offset-1">Image</div>
        <div className="col-md-2">Title</div>
	<div className="col-md-2">User</div>
        <div className="col-md-2">Start Date</div>
        <div className="col-md-2">Days Traveled</div>
        </div>
        <div>
	   <Journals data={this.state.data} />
        </div>
      </div>
    );
  } 
}
