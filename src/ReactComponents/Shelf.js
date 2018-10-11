import React from "react"
import Book from './Book'

export default class Shelf extends React.Component {
    render () {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <Book />
                  <Book />
                </li>
              </ol>
            </div>
          </div>
        );
    }
}