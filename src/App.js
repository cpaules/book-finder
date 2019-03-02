import React, { Component } from 'react';
import './App.css';
import BookCard from './BookCard'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', 
                  items: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.value)
      .then(response => response.json())
      .then(data => this.setState(data))
      .catch(error => console.log(error));
    event.preventDefault(); 
  }

  render() {
    return (
      <div className="App">
        <h2>Book Finder</h2>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search by book title or author" value={this.state.value} onChange={this.handleChange} ></input>
          <button type="submit" className="btn btn-success" id="button">Search</button>
        </form>
        <div className="BooksContainer">
          {this.state.items.map(book => < BookCard key={book.id} book={book} />)}
        </div>
      </div>
    );
  }
}

export default App;
