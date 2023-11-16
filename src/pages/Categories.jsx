import React from 'react';
import Navbar from '../components/Navbar';
import '../css/styles.css';
import { Link } from 'react-router-dom';

const Categories = () => {
    // Sample product data
    const products = [
        { id: 1, name: 'Adaptor Charger', image: 'https://media.takealot.com/covers_images/7998480cd57341c3adf4d405fca63a2a/s-pdpxl.file' },
        { id: 1, name: 'Power Bank', image: 'https://m.media-amazon.com/images/I/61p0l35DX-L._AC_SL1500_.jpg' },
        { id: 1, name: 'USB Charger', image: 'https://qph.cf2.quoracdn.net/main-qimg-b0b56b65d3166119dd14b3c0accd6d34' },
        { id: 2, name: 'Speaker', image: 'https://www.dcutec.com/2818-large_default/power-bank-4-usb-outputs-power-delivery-20w-quick-charge-225w-30000mah.jpg' },
        { id: 2, name: 'Ear Phone', image: 'https://m.media-amazon.com/images/I/71A9g778HsL.jpg' },
        { id: 2, name: 'Product 2', image: 'https://www.dcutec.com/2818-large_default/power-bank-4-usb-outputs-power-delivery-20w-quick-charge-225w-30000mah.jpg' },
        // Add more product items as needed
    ];

    return (
        <div className='justify-between items-center h-24 max-w-[1280px] mx-auto px-4'>
            <Navbar />
            <main className="container mx-auto p-4">
                <h1 className='text-white text-2xl font-semibold mb-4'>Categories</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
