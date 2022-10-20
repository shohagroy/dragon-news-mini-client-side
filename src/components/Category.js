import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {

    const {id, name } = category;
    return (
        <div className='text-center'>
            <NavLink to={`category/${id}`} type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800 w-full my-1">{name}</NavLink>
        </div>
    );
};

export default Category;