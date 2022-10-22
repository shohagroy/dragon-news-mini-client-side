import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvaider } from '../AuthContext/AuthContext';

const UpdateProfile = () => {

    
    const { user } = useContext(AuthProvaider);


    return (
        <div className='w-100 bg-white h-[80vh]'>
            <div className='flex items-center pt-8 pl-4'>
                <div className='ml-5'>
                    
                    <span className={`${user.photoURL ? 'block' : 'hidden'}`}>
                    <img className='h-[80px] w-[80px] ml-2 rounded-full' src={user?.photoURL} alt="profile" />
                    </span>

                    <div className={`${user.photoURL ? 'hidden' : 'relative'}  bg-black rounded-full text-white`}>
                        <i className="fa-regular fa-user text-3xl p-5 "></i>
                    </div>

                    <p className='text-xl font-bold ml-2'>{user?.displayName}</p>
                </div>

            </div>

            <div className='mt-10'>
                <div className='mx-10'>
                    <label className='block my-2 text-left
                    ' htmlFor="name">Email</label>
                    <input type="text" className='border-2 border-black p-2 w-full rounded' defaultValue={user?.email} readOnly />
                    <label className='block my-2 text-left
                    ' htmlFor="name">Name</label>
                    <input type="text" className='border-2 border-black p-2 w-full rounded' defaultValue={user?.displayName} />
                </div>
                <div className=' mx-10 my-2'>
                    <label className='block text-left
                    ' htmlFor="name">Photo Url</label>
                    <input type="text" className='border-2 border-black p-2 w-full rounded' defaultValue={user?.photoURL} />
                </div>
            </div>

            <div>
            <button className='bg-blue-600 text-xl rounded-xl w-[80%] mt-3 p-2 text-white '>Update</button>
            </div>





            <Link to='/'>home</Link>
        </div>
    );
};

export default UpdateProfile;