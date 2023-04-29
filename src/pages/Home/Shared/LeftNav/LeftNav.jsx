import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsight from '../../News/EditorsInsight/EditorsInsight';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-amir2601.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default LeftNav;