import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { img, name, text } = review;
    return (
        <>

            <div className="col">
                <div className="card h-100 review-img ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                    
                </div>
            </div>



        </ >
    );
};

export default Review;