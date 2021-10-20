import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { img, name, text } = review;
    return (
        <>

            <div class="col my-5">
                <div class="card card-img">
                    <img src={img} className="" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{text}</p>
                    </div>
                </div>
            </div>


        </ >
    );
};

export default Review;