'use client'
import React, { useEffect, useState } from 'react';

function EffectFetch() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {

                setLoading(true);


                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {

                setLoading(false);
            }
        };


        fetchData();
    }, []);

    return (
        <div>
            <h1>Post List</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default EffectFetch;

//https://reqres.in/api/users?page=1
