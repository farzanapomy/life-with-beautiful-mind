import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, title, description, id } = service

    return (
        <div >
            <div class="card mb-3 container" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title ">{title}</h2>
                            <p class="card-text">{description}</p>
                            <button className='btn btn-warning'>
                                <NavLink
                                    to={`/services/${id}`}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration:'none'
                                    }}
                                >
                                    Go For Details
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Service;