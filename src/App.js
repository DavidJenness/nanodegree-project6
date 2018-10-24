import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./ReactViews/Home";
import Search from "./ReactViews/Search";
import * as BooksAPI from "./BooksAPI";

import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(response => {
      this.setState({
        books: response
      });
    });
  }

  updateBookInfo = (book, shelf) => {
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books
          .filter(function(myBook) {
            if (myBook.id !== book.id) {
              return myBook;
            } else {
              return null;
            }
          })
          .concat([book])
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>

          <Route exact
            path="/"
            render={props => <Home {...props} bookList={this.state.books} updateBookInfo={this.updateBookInfo} />}
          />

          <Route exact
            path="/Search"
            render={props => <Search {...props} bookList={this.state.books} updateBookInfo={this.updateBookInfo}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
