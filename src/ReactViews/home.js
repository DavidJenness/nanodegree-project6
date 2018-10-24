import React, { Component } from "react"
import Shelf from '../ReactComponents/Shelf'
import SearchPlus from '../ReactComponents/SearchPlus'

class home extends Component {

  constructor(props) {
    super(props)
    this.state = { books:this.props.bookList  
    }
  }

componentWillReceiveProps = (props) => {
  this.props = props;
  this.setState({books: this.props.bookList})
}

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf updateBookInfo={this.props.updateBookInfo} title="Currently Reading" books={this.state.books.filter(function myShelfCheck(myShelf) {
              if (myShelf.shelf === "currentlyReading") {return myShelf} else {return null}
            })} />
            <Shelf updateBookInfo={this.props.updateBookInfo} title="Want to Read" books={this.state.books.filter(function myShelfCheck(myShelf) {
              if (myShelf.shelf === "wantToRead") {return myShelf} else {return null}
            })} />
            <Shelf updateBookInfo={this.props.updateBookInfo} title="Read" books={this.state.books.filter(function myShelfCheck(myShelf) {
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