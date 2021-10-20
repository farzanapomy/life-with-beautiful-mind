import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <h2>This page not found</h2>
            <img src={notFound} alt="" />
            <div>
                <button className='border border-rounded bg-primary'>

                    <Link to='/home'>
                        <button className='btn btn-warning pe-3'>Go Home</button>
                    </Link>

                </button>
            </div>
        </div>
    );
};

export default NotFound;