import React from 'react';


const RightSide = () => {
    return (
        <div className='fixed w-[300px]'>
            {/* signup button section  */}
            <div>
                <button type="button" className="px-8 w-full my-2 py-3 font-semibold border rounded hover:bg-white duration-300 border-blue-400 hover:text-blue-400"><span className=''><i className="fa-brands fa-google"></i></span> Login With Google</button>
                <button type="button" className="px-8 w-full py-3 font-semibold border rounded hover:bg-gray-700 duration-300 border-gray-700 hover:text-white"><span><i className="fa-brands fa-github"></i></span> Login With GitHub</button>
            </div>

            {/* find on us section  */}
            <div className='text-left my-3'>
                <h3>Find on Us:</h3>
                <p className='bg-white my-2 py-2 px-5 hover:bg-blue-500 duration-300 hover:text-white cursor-pointer rounded-md'> <span><i className="fa-brands fa-facebook"></i></span> Facebook</p>

                <p className='bg-white my-2 py-2 px-5 hover:bg-red-600 duration-300 hover:text-white cursor-pointer rounded-md'> <span><i className="fa-brands fa-youtube"></i></span> Youtube</p>

                <p className='bg-white my-2 py-2 px-5 hover:bg-blue-400 duration-300 hover:text-white cursor-pointer rounded-md'> 
                <span><i className="fa-brands fa-twitter"></i></span> Twitter</p>

                <p className='bg-white my-2 py-2 px-5 hover:bg-green-500 duration-300 hover:text-white cursor-pointer rounded-md'> <span><i className="fa-brands fa-whatsapp"></i></span> WhatsApp</p>

                <p className='bg-white my-2 py-2 px-5 hover:bg-blue-500 duration-300 hover:text-white cursor-pointer rounded-md'> <span><i className="fa-brands fa-discord"></i></span> Discord</p>

                <p className='bg-white my-2 py-2 px-5 hover:bg-gray-400 duration-300 hover:text-white cursor-pointer rounded-md'> <span><i className="fa-solid fa-lock"></i></span> Privacy Policy</p>

                <p className='bg-white my-2 py-2 px-5 hover:bg-orange-500 duration-300 hover:text-white cursor-pointer rounded-md'> <span><i className="fa-solid fa-file-lines"></i></span> Terms & Condition</p>

            </div>

        </div>
    );
};

export default RightSide;