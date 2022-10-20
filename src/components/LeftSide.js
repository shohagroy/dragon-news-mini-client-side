import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const LeftSide = () => {


    const categorys = useLoaderData()

    return (
        <div className=' bg-white fixed w-[250px]'>
            <h3 className='text-xl font-bold p-2'>All Category - {categorys.length}</h3>

            <div className='mt-2 p-2'>
                {
                    categorys.map(category => <Category key={category.id} category={category}/>)
                }
            </div>
        </div>
    );
};

export default LeftSide;