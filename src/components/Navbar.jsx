import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SearchAppBar from './SearchAppBar'; // Adjust the import according to your actual file location
import { Link } from 'react-router-dom';
import logo from '../imgs/Logo_no_text.png';
import '../css/styles.css'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    const [hovered, setHovered] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);


    const handleMouseEnter = (item) => {
        setSelectedItem(item);
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setSelectedItem(null);
        setHovered(false);
    };

    const productsMenuItems = ['Adaptor Charger', 'Power Bank', 'USB Charger', 'Speaker', 'Ear Phone'];
    const brandsMenuItems = ['Anker', 'Aukey', 'Sony', 'Asus', 'Adata'];

    return (
        <div>
            <div className='text-white flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4'>
                <Link to='/phone-accessories/home'>
                    <img src={logo} alt="Logo" className='w-fit h-12' />
                </Link>

                <ul className='hidden md:flex'>

                    <li className='p-4 text-hover text-lg'>
                        <Link to='/phone-accessories/home' >Home</Link>
                    </li>
                    <li
                        className='p-4 text-lg'
                        onMouseEnter={() => handleMouseEnter('Categories')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/phone-accessories/categories" className='block'>
                            Categories
                        </Link>
                        {hovered && selectedItem === 'Categories' && (
                            <div className='absolute bg-white border border-gray-300 text-black p-3 w-[200px] rounded-lg z-50'>
                                {productsMenuItems.map((item) => (
                                    <Link
                                        key={item}
                                        to={`/phone-accessories/product?category=${encodeURIComponent(item)}`}
                                        className='block p-2 text-hover'
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                    <li
                        className='p-4 text-lg'
                        onMouseEnter={() => handleMouseEnter('Brands')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/phone-accessories/brands" className='block'>
                            Brands
                        </Link>
                        {hovered && selectedItem === 'Brands' && (
                            <div className='absolute bg-white border border-gray-300 text-black p-3 w-[200px] rounded-lg z-50 '>
                                {brandsMenuItems.map((item) => (
                                    <div key={item} className='p-2 text-hover' onClick={() => console.log(item)}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                    <li className='p-4 text-hover text-lg'>
                        <Link to='/phone-accessories/contact'>Contact</Link>
                    </li>
                    <li className='p-4 text-hover text-lg'>
                        <Link to='/phone-accessories/about'>About</Link>
                    </li>
                </ul>
                <SearchAppBar />
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>

                <div className={!nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-gray-600 ease-in-out duration-500 z-50' : 'fixed hidden ease-in-out duration-500'}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React</h1>
                    <SearchAppBar />
                    <ul className='pt-4 uppercase px-4'>
                        <li className='p-4'>
                            <Link to='/phone-accessories/home'>Home</Link>
                        </li>
                        <li className='p-4'>
                            <Link to='/phone-accessories/categories'>Categories</Link>
                        </li>
                        <li className='p-4'>
                        <Link to='/phone-accessories/brands'>Brands</Link>
                        </li>
                        <li className='p-4'>
                            <Link to='/phone-accessories/contact'>Contact</Link>
                        </li>
                        <li className='p-4'>
                            <Link to='/phone-accessories/about'>About</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;