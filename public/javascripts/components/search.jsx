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
    .then(data => this.ProcessData({data}));
    //.then(data => this.setState({data}));
  }
  ProcessData(data){
    var count = data.data.data.data.count;
    var d = data.data.data.data.books;
    console.log('processed')
　　　　d.map(function(book, i){
	book.id=i
	return book
});
    console.log(d)
    if(count > 0){
	this.setState({data: d})
    }
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
	<div className="col-md-10 col-md-offset-1 input-group">
          <span className="input-group-btn">
	    <button className="btn btn-default"  onClick={this.Search.bind(this)} type="button">Go!</button>
          </span>
          <input className="form-control" type="text" value={this.state.query} onChange={this.UpdateInputValue.bind(this)}/>
	</div>
        <table className="table table-hover results">
          <thead>
            <tr>
	    <th　className="text-center" >Image</th>
            <th　className="text-center" >Title</th>
	    <th　className="text-center" >User</th>
            <th　className="text-center" >Start Date</th>
            <th　className="text-center" >Days Traveled</th>
	    </tr>
          </thead>
	    <Journals data={this.state.data} />
        </table>
      </div>
    );
  } 
}
