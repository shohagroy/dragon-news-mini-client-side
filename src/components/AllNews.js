import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from './SingleNews';

const AllNews = () => {
    const allNews = useLoaderData();

    return (
        <div>
            <div>
            {
                allNews?.map(news => <SingleNews key={news._id} news={news} />)
            }
            </div>
            <div className={`${allNews.length ? 'hidden': 'block'}`}>
                <h2 className='m-10 p-10 text-red-600 font-bold text-center text-5xl'>No Data Found!</h2>
            </div>
            
        </div>
    );
};

export default AllNews;