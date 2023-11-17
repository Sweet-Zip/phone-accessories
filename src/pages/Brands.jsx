import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import SortIcon from '@mui/icons-material/Sort';

const Brands = () => {
  const initialBrands = [
    { id: 1, name: 'Anker', image: 'https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/275519339_5143604412385587_5427364362671309443_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEyDfjReEAfBHLV_62gpi8jjMJJT1NMNWqMwklPU0w1aulc2PfiLn1QDUuGSw84tmlHjFzrHVzibyieyyxcVO3L&_nc_ohc=kIo13cvACPIAX88eb7s&_nc_ht=scontent.fpnh24-1.fna&oh=00_AfChczvTk6tjK3YazjDLrCcjYVq7aw_N-AH1ZCD2ViKlOw&oe=655B5470' },
    { id: 2, name: 'Aukey', image: 'https://images.aukey.com/en/images/20191223191741-AUKEY-LOGO-PNG-1200.jpg' },
    { id: 3, name: 'Sony', image: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png' },
    { id: 4, name: 'Asus', image: 'https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png' },
    { id: 5, name: 'Product 2', image: 'https://www.dcutec.com/2818-large_default/power-bank-4-usb-outputs-power-delivery-20w-quick-charge-225w-30000mah.jpg' },
    { id: 6, name: 'Product 3', image: 'https://www.dcutec.com/2818-large_default/power-bank-4-usb-outputs-power-delivery-20w-quick-charge-225w-30000mah.jpg' },
    // Add more product items as needed
  ];


  const [products, setProducts] = useState(initialBrands);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortProducts = (order) => {
    const sorted = [...products].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (order === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setProducts(sorted);
    setSortOrder(order);
  };

  return (
    <div className='justify-between items-center h-24 max-w-[1280px] mx-auto px-4'>
      <Navbar />
      <main className="container mx-auto p-4">
        <div className='flex items-center'>
          <h1 className='text-white text-4xl font-semibold mb-4'>Brand</h1>
          <div className="ml-auto">
            <Dropdown>
              <MenuButton className='flex items-center'>
                <SortIcon />
              </MenuButton>
              <Menu slots={{ listbox: Listbox }}>
                <MenuItem onClick={() => sortProducts('asc')} sx={{ cursor: 'pointer' }}>
                  Ascending (A-Z)
                </MenuItem>
                <MenuItem onClick={() => sortProducts('desc')} sx={{ cursor: 'pointer' }}>
                  Descending (Z-A)
                </MenuItem>
              </Menu>
            </Dropdown>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-5 lg:gap-5 gap-2">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-200 rounded-lg overflow-hidden product-card">
              <div className="relative" style={{ paddingBottom: '100%', overflow: 'hidden' }}>
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-contain" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Brands;

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1;
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
);