import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div id='blogs'>
            <div className='my-5'>
                <h1>Our Lastes News</h1>
                <p>Learn more about what is happening with PsyCare and all over the country in behavioral health.</p>

            </div>
            <div className='card-container container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>

        </div >
    );
};

export default Blogs;