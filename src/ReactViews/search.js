import React, { Component } from "react"
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../ReactComponents/Book'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // books: [],
      searchResults: [],
      query: ""
    }
  }

  searchForBooks() {
    BooksAPI.search(this.state.query)
      .then(response => {
        if (this.state.query === '') { return this.setState({ searchResults: [] }) }
        if (response.length === undefined) { return this.setState({ searchResults: [] }) }
        
        //Look through the books on our shelves and make sure the shelf status is up to date
        this.props.bookList.forEach(function (bookOnShelfItem) {
          response.forEach(function (responseItem) {
            if (responseItem.id === bookOnShelfItem.id) {
              responseItem.shelf = bookOnShelfItem.shelf;
            }
          })
        });
        return this.setState({ searchResults: response })
      })
  }

  updateQuery = (query) => {
    this.setState({ query: query }, this.searchForBooks);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/"></Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          {/* Added a count based on the video in lesson 3.7 */}
          {this.state.searchResults.length !== 0 && (<div className='search-count' >
            <span> {this.state.searchResults.length} Books found that match your criteria </span>
          </div>
          )}
          <ol className="books-grid">
            {
              this.state.searchResults.map((book, index) => <Book updateBookInfo={this.props.updateBookInfo} book={book} key={index} />)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;