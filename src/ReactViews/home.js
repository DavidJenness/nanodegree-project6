import React, { Component } from "react"
import Shelf from '../ReactComponents/Shelf'
import SearchPlus from '../ReactComponents/SearchPlus'
import * as BooksAPI from '../BooksAPI'

class home extends Component {

  constructor(props) {
    super(props)
    this.state = { books: [] }
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => {
      this.setState({ 
        books: response });
    })
  }

  updateBookInfo = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(resp => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(function(myBook){
            if (myBook.id !== book.id) {return myBook} else {return null}
          }).concat([book])
        }))
      })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf updateBookInfo={this.updateBookInfo} title="Currently Reading" books={this.state.books.filter(function myShelfCheck(myShelf) {
              if (myShelf.shelf === "currentlyReading") {return myShelf} else {return null}
            })} />
            <Shelf updateBookInfo={this.updateBookInfo} title="Want to Read" books={this.state.books.filter(function myShelfCheck(myShelf) {
              if (myShelf.shelf === "wantToRead") {return myShelf} else {return null}
            })} />
            <Shelf updateBookInfo={this.updateBookInfo} title="Read" books={this.state.books.filter(function myShelfCheck(myShelf) {
              if (myShelf.shelf === "read") {return myShelf} else {return null}
            })} />
          </div>
        </div>
        <SearchPlus />
      </div>
    );
  }
}

export default home;