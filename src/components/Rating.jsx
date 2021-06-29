import React from 'react';

class Rating extends React.Component{
    render(){
        const { rating } = this.props;
        return (
        <div>
            <p className='rating'>
                Rating {rating}
            </p>
        </div>
        );
    }
}

export default Rating;
