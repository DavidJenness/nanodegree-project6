import React from "react"
import Book from './Book'

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {

              this.props.books.map((book, key) => <Book updateBookInfo={this.props.updateBookInfo} book book={book} key={key} />)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;