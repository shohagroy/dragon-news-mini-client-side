import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from './SingleNews';

const News = () => {

    const allNews = useLoaderData();


    return (
        <div>
            {
                allNews.map(news => <SingleNews key={news._id} news={news} />)
            }
        </div>
    );
};

export default News;