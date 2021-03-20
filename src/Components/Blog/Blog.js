import React from 'react';
import { useEffect } from 'react';

const Blog = (props) => {
    // get background info
    const [bg, setBg] = props.background;
    useEffect(() => {
        setBg({});
    })
    return (
        <div>
            <h2>This is Blog</h2>
        </div>
    );
};

export default Blog;