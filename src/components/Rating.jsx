import React from 'react';

class Rating extends React.Component {
    render() {
        const { rating } = this.props
        return (
            <div>
                <h2>Rating</h2>
              <h1 className ="rating">{rating}</h1>
            </div>
        )
    }
}

export default Rating