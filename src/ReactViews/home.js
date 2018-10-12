import React, {Component} from "react"
import Shelf from '../ReactComponents/Shelf'
import SearchPlus from '../ReactComponents/SearchPlus'

export default class home extends Component {

    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading"/>
                <Shelf title="Want to Read"/>
                <Shelf title="Read"/>
               </div>
            </div>
            <SearchPlus />
          </div>
        );
    }
}