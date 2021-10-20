import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div id='reviews' className='container card-section ' >
            <div id='review'>
                <h1 className='my-5'>Respected Reviews</h1>
                <h5 className='mb-5'>Mental Health & Wellness
                    Resources The following links are to other websites that may be of interest. However, once you have used these links to leave our site, you should note that UR Medicine and our Department of Psychiatry</h5>
                <div className='  row row-cols-1 row-cols-md-3 g-4  >'>

                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}

                        ></Review>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;