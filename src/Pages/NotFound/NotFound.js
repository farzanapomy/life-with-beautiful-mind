import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <h2>This page not found</h2>
            <img src={notFound} alt="" />
            <div>
                <button className='border border-rounded bg-primary'>
                    <NavLink
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black",
                            border: 'info'
                        }}
                    >
                        Go To home
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default NotFound;