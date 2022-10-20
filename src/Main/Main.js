import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

const Main = () => {
    return (
        <div className='text-center'>
            <Header/>
            <div  className='max-w-[1200px] mx-auto grid md:grid-cols-[250px_minmax(650px,_1fr)_300px]'>
                <div>
                    <LeftSide/>
                </div>
                <div>
                    <Outlet/>
                </div>
                <div>
                    <RightSide/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;