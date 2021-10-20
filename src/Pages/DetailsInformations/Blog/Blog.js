import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Blog.css'

const Blog = ({ blog }) => {
    const { title, description, img, id } = blog;
    return (
        <div>

            <Card className='g-5 my-5'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                            <button className='btn btn-primary'>Read {title.toLowerCase()} blog</button>
                    </small>
                </Card.Footer>
            </Card>


        </div>
    );
};

export default Blog;