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
    return (
      <div className="search-component">
        <input type="text" value={this.state.query} onChange={this.UpdateInputValue.bind(this)}/>
        <a className="btn btn-default" onClick={this.Search.bind(this)}>Search</a>
        <div>
	   <Journals data={this.state.data} />
        </div>
      </div>
    );
  } 
}
