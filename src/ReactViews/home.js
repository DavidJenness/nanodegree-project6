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
    BooksAPI.getAll().then(response => {
      this.setState({ books: response });

    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(resp => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(x => x.id !== book.id).concat([book])
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
            <Shelf updateBook={this.updateBook} title="Currently Reading" books={this.state.books.filter(x => x.shelf === "currentlyReading")} />
            <Shelf updateBook={this.updateBook} title="Want to Read" books={this.state.books.filter(x => x.shelf === "wantToRead")} />
            <Shelf updateBook={this.updateBook} title="Read" books={this.state.books.filter(x => x.shelf === "read")} />
          </div>
        </div>
        <SearchPlus />
      </div>
    );
  }
}

export default home;