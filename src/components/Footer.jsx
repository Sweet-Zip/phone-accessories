import React from 'react';
import logo from '../imgs/Logo_no_text.png';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center max-sm:gap-5 sm:gap-5 md:gap-20 gap-20">
                {/* Footer Logo */}
                <div className="flex justify-center items-center flex-col md:mb-4 mb-0">
                    <img src={logo} alt="Footer Logo" className="h-20" />
                    <p className="text-center">កន្លែងដែលផ្តល់បទពិសោធន៍ថ្មីសម្រាប់យើងទាំងអស់គ្នា</p>
                </div>
                <div className="text-sm text-center">
                    <ul>
                        <li>អាសយដ្ឋាន</li>
                        <li>ផ្ទះលេខ160BE សង្កាត់បឹងកេងកង1 ផ្លូវ63 រាជធានី ភ្នំពេញ</li>
                        <li className='block md:flex text-center'>
                            <LocalPhoneRoundedIcon /> 012/069/093 553 177 <p className='max-sm:hidden'> &|; </p><br className='min-sm:hidden' /> <EmailRoundedIcon /> tammall.official@gmail.com
                        </li>
                    </ul>
                    <div className="text-md pt-2">
                        <a href="#home" className="text-gray-300 hover:text-white mr-4">
                            <FacebookRoundedIcon />
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white mr-4">
                            Instagram
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 my-2"></div>
            <p className="text-md text-gray-400 text-center">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

