import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom';

const ProductItems = () => {
    const products = [
        { id: 1, name: 'Power bank 1', category: 'Power Bank', price: '$10', image: 'https://m.media-amazon.com/images/I/61p0l35DX-L._AC_SL1500_.jpg' },
        { id: 2, name: 'Charger 1', category: 'Charger', price: '$10', image: 'https://m.media-amazon.com/images/I/61p0l35DX-L._AC_SL1500_.jpg' },
        { id: 3, name: 'Power bank 2', category: 'Power Bank', price: '$10', image: 'https://m.media-amazon.com/images/I/61p0l35DX-L._AC_SL1500_.jpg' },
        { id: 4, name: 'Earphone', category: 'Earphone', price: '$15', image: 'https://www.dcutec.com/2818-large_default/power-bank-4-usb-outputs-power-delivery-20w-quick-charge-225w-30000mah.jpg' },
        { id: 5, name: 'Charger 2', category: 'Charger', price: '$15', image: 'https://www.dcutec.com/2818-large_default/power-bank-4-usb-outputs-power-delivery-20w-quick-charge-225w-30000mah.jpg' },
        { id: 6, name: 'Speaker 1', category: 'Speaker', price: '$15', image: 'https://www.dcutec.com/2818-large_default/power-bank-4-usb-outputs-power-delivery-20w-quick-charge-225w-30000mah.jpg' },
        // Add more product items as needed
    ];
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    // Filter products based on the category query parameter
    const filteredProducts = category
        ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
        : products;

    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4">
                <h1 className='text-white text-2xl font-semibold mb-4'>Products</h1>
                {filteredProducts.length === 0 ? (
                    <div className='flex justify-center items-center' style={{height: '70vh'}}>
                        <div className='text-white text-2xl font-semibold mb-10 text-center p-4 bg-gray-800 rounded-lg'>
                            No items found for the <i><b>`{category}`</b></i> category.
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="bg-gray-200 rounded-lg overflow-hidden product-card">
                                <div className="relative" style={{ paddingBottom: '100%', overflow: 'hidden' }}>
                                    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                                    <p className="text-gray-600">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default ProductItems