import React from "react"
import { Link } from 'react-router-dom'


class SearchPlus extends React.Component {
    render () {
        return (
            <div className="open-search">
              <Link to={{ pathname: '/search' }}></Link>
            </div>
        );
    }
}

export default SearchPlus;