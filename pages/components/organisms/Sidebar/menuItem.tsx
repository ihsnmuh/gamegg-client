import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface MenuItemProps {
  title: string;
  icon:
    | 'ic-menu-overview'
    | 'ic-menu-transaction'
    | 'ic-menu-message'
    | 'ic-menu-card'
    | 'ic-menu-rewards'
    | 'ic-menu-settings'
    | 'ic-menu-logout';
  active?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  const { title, icon, active } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active: active,
  });

  return (
    <>
      <div className={classItem}>
        <div className='icon me-3'>
          <Image
            src={`/icon/${icon}.svg`}
            width={25}
            height={25}
            alt='overview'
          />
        </div>
        <p className='item-title m-0'>
          <Link href=''>
            <a className='text-lg text-decoration-none'>{title}</a>
          </Link>
        </p>
      </div>
    </>
  );
}
