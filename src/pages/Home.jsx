import React from 'react';
import NavBar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import { Link } from 'react-router-dom';

import '../index.css'
import '../css/styles.css'
import ItemsListHorizontal from '../components/ItemListHorizontal';
import Footer from '../components/Footer';

export default function Home() {



  const products = [
    { id: 1, name: 'Power bank 1', category: 'Power Bank', price: '$10', image: 'https://m.media-amazon.com/images/I/61p0l35DX-L._AC_SL1500_.jpg' },
    { id: 2, name: 'Charger 1', category: 'Adapter Charger', price: '$10', image: 'https://5.imimg.com/data5/TL/TN/AP/SELLER-55536729/mobile-charger-adapter.jpg' },
    { id: 3, name: 'Power bank 2', category: 'Power Bank', price: '$10', image: 'https://www.dcutec.com/2818-large_default/power-bank-4-usb-outputs-power-delivery-20w-quick-charge-225w-30000mah.jpg' },
    { id: 4, name: 'Earphone', category: 'Earphone', price: '$15', image: 'https://m.media-amazon.com/images/I/61zKkP36kDL.jpg' },
    { id: 5, name: 'Charger 2', category: 'USB Charger', price: '$15', image: 'https://i.ebayimg.com/images/g/0RUAAOSw1mdecPaD/s-l1600.jpg' },
    { id: 6, name: 'Speaker 1', category: 'Speaker', price: '$15', image: 'https://i5.walmartimages.com/seo/Sony-SRSXB33-Black-Wireless-Waterproof-Portable-Bluetooth-Speaker-with-Extra-Bass-2020_28818b96-e23b-4b33-8b9f-836a8dacff15_2.56b7107debdad4f22e6aaafddcda877c.jpeg' },
    // Add more product items as needed
  ];

  const powerBankProducts = products.filter((product) => product.category === 'Power Bank');
  const adapterChargerProducts = products.filter((product) => product.category === 'Adapter Charger');
  const speakerChargerProducts = products.filter((product) => product.category === 'Speaker');

  const images = [
    'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_640.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    // Add more image URLs here
  ];
  return (
    <div >
      <nav>
        <NavBar />
      </nav>
      <body className='justify-between items-center max-w-[1280px] mx-auto px-4'>
        <ImageSlider images={images} />
        <div>
          <div className='flex pt-4 pb-1 items-center justify-between'>
            <h2 className='text-white font-bold text-2xl'>
              Feature Product
            </h2>
            <Link to={'/phone-accessories/'} className='ml-auto text-white underline'>
              See All
            </Link>
          </div>
          <ItemsListHorizontal products={products} />
        </div>
        <div>
          <div className='flex pt-4 pb-1 items-center justify-between'>
            <h2 className='text-white font-bold text-2xl'>
              Power Bank
            </h2>
            <Link to={'/phone-accessories/'} className='text-white underline'>
              See All
            </Link>
          </div>
          <ItemsListHorizontal products={powerBankProducts} />
        </div>
        <div>
          <div className='flex pt-4 pb-1 items-center justify-between'>
            <h2 className='text-white font-bold text-2xl'>
              Adapter Charger
            </h2>
            <Link to={'/phone-accessories/'} className='text-white underline'>
              See All
            </Link>
          </div>
          <ItemsListHorizontal products={adapterChargerProducts} />
        </div>
        <div>
          <div className='flex pt-4 pb-1 items-center justify-between'>
            <h2 className='text-white font-bold text-2xl'>
              Speaker
            </h2>
            <Link to={'/phone-accessories/'} className='text-white underline'>
              See All
            </Link>
          </div>
          <ItemsListHorizontal products={speakerChargerProducts} />
        </div>
      </body>
      <Footer />

    </div>

  );
}
