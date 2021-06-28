import React from 'react'

class Rating extends React.Component {
    render() {
        const rating = this.props.rating
        
        return(
            <p>Rating {rating}</p>
        )
    }
}

export default Rating;