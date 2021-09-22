import React from 'react';
import Footer from './footer';
import Profile from './profile';
import MenuItem from './menuItem';

interface SidebarProps {
  activeMenu:
    | 'overview'
    | 'transaction'
    | 'message'
    | 'card'
    | 'rewards'
    | 'setting';
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;

  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <MenuItem
            title='Overview'
            icon='ic-menu-overview'
            link='/member'
            active={activeMenu === 'overview'}
          />
          <MenuItem
            title='Transaction'
            icon='ic-menu-transaction'
            link='/member/transactions'
            active={activeMenu === 'transaction'}
          />
          <MenuItem
            title='Message'
            icon='ic-menu-message'
            link='/member'
            active={activeMenu === 'message'}
          />
          <MenuItem
            title='Card'
            icon='ic-menu-card'
            link='/member'
            active={activeMenu === 'card'}
          />
          <MenuItem
            title='Rewards'
            icon='ic-menu-rewards'
            link='/member'
            active={activeMenu === 'rewards'}
          />
          <MenuItem
            title='Settings'
            icon='ic-menu-settings'
            link='/member/edit-profile'
            active={activeMenu === 'setting'}
          />
          <MenuItem title='Log Out' icon='ic-menu-logout' link='/sign-in' />
        </div>
        <Footer />
      </div>
    </section>
  );
}
