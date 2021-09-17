import React from 'react';
import Footer from './footer';
import Profile from './profile';
import MenuItem from './menuItem';

export default function Sidebar() {
  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <MenuItem title='Overview' icon='ic-menu-overview' active />
          <MenuItem title='Transaction' icon='ic-menu-transaction' />
          <MenuItem title='Message' icon='ic-menu-message' />
          <MenuItem title='Card' icon='ic-menu-card' />
          <MenuItem title='Rewards' icon='ic-menu-rewards' />
          <MenuItem title='Settings' icon='ic-menu-settings' />
          <MenuItem title='Log Out' icon='ic-menu-logout' />
        </div>
        <Footer />
      </div>
    </section>
  );
}
