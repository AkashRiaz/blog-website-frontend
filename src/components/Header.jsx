import React from 'react';
import { images } from '../constants';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section>
            <header className='flex h-[60px]  justify-center items-center'>
                <div className='flex-1 '>
                    <img src={images.Logo} alt="Logo" className='h-14' />
                </div>
                <div className='flex-1'>
                  <div className='flex justify-end items-center h-full space-x-4'>
                  <ul className='flex space-x-3'>
                        <li className=' relative group'>
                            <Link className='px-4 py-2'>Home</Link>
                            <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
                            </li>
                           <li> <Link>Articles</Link></li>
                         <li>
                         <Link>Pages</Link>
                            </li>   
                           <li>
                           <Link>Pricing</Link>
                           </li>
                            <li>
                            <Link>FAQ</Link>
                            </li>
                      
                    </ul>
                    <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign in</button>
                  </div>
                </div>
            </header>
        </section>
    );
};

export default Header;