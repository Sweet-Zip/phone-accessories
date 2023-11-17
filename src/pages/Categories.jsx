import React from 'react';
import Navbar from '../components/Navbar';
import '../css/styles.css';
import { Link } from 'react-router-dom';

const Categories = () => {
    // Sample product data
    const products = [
        { id: 1, name: 'Adaptor Charger', image: 'https://media.takealot.com/covers_images/7998480cd57341c3adf4d405fca63a2a/s-pdpxl.file' },
        { id: 2, name: 'Power Bank', image: 'https://m.media-amazon.com/images/I/61p0l35DX-L._AC_SL1500_.jpg' },
        { id: 3, name: 'USB Charger', image: 'https://qph.cf2.quoracdn.net/main-qimg-b0b56b65d3166119dd14b3c0accd6d34' },
        { id: 4, name: 'Speaker', image: 'https://i5.walmartimages.com/seo/Sony-SRSXB33-Black-Wireless-Waterproof-Portable-Bluetooth-Speaker-with-Extra-Bass-2020_28818b96-e23b-4b33-8b9f-836a8dacff15_2.56b7107debdad4f22e6aaafddcda877c.jpeg' },
        { id: 5, name: 'Ear Phone', image: 'https://m.media-amazon.com/images/I/71A9g778HsL.jpg' },
        { id: 6, name: 'Watch', image: 'https://www.ione.com.kh/wp-content/uploads/2022/09/1-16.jpg' },
        // Add more product items as needed
    ];

    return (
        <div className='justify-between items-center h-24 max-w-[1280px] mx-auto px-4'>
            <Navbar />
            <main className="container mx-auto p-4">
                <h1 className='text-white text-2xl font-semibold mb-4'>Categories</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-5 lg:gap-5 gap-2">
                    {products.map((product) => (
                        <Link to={`/phone-accessories/product?category=${encodeURIComponent(product.name)}`} >
                            <div key={product.id} className="bg-gray-200 rounded-lg overflow-hidden product-card">
                                <div className="relative" style={{ paddingBottom: '100%', overflow: 'hidden' }}>
                                    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <p className="text-lg font-semibold mb-2">{product.name}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Categories;
