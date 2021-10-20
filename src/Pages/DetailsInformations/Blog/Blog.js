import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { title, description, img } = blog;
    return (
        <div className='blog-body'>
            <div className="col">
                <div className="card h-100  ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <Card.Footer>
                        <small className="text-muted">
                            <button className='btn btn-primary'>Read {title.toLowerCase()} blog</button>
                        </small>
                    </Card.Footer>
                </div>
            </div>

        </div >
    );
};

export default Blog;