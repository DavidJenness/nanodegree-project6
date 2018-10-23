import React, {Component} from "react"
import Shelf from '../ReactComponents/Shelf'
import SearchPlus from '../ReactComponents/SearchPlus'
import * as BooksAPI from '../BooksAPI'

export default class home extends Component {

constructor(props) {
  super(props)
  this.state = { books:[]}
}

componentDidMount() {
BooksAPI.getAll().then(response => {
  this.setState({books: response});
  console.log(this.state.books);
})
}


    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading" books={this.state.books}/>
                <Shelf title="Want to Read" books={this.state.books}/>
                <Shelf title="Read" books={this.state.books}/>
               </div>
            </div>
            <SearchPlus />
          </div>
        );
    }
}