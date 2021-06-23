// implement MovieList component here
import React from 'react'

class MovieList extends React.Component {
    render() {
        return <div className='container'>
            {this.props.movies}
        </div>
    }
}

export default MovieList