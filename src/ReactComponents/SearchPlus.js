import React from "react"


export default class SearchPlus extends React.Component {
    render () {
        return (
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
        );
    }
}