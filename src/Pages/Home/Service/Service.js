import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, title, description, id } = service

    return (
        <div >
            <div className="card mb-3 container" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded " alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title ">{title}</h2>
                            <p className="card-text">{description}</p>
                            <button className='btn btn-warning'>
                                <NavLink
                                    to={`/services/${id}`}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: 'none'
                                    }}
                                >
                                    <small className="text-muted">
                                        <button className='btn btn-primary'>Read More About {title.toLowerCase()} </button>
                                    </small>
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