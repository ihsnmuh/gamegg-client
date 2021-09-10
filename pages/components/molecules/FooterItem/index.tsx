import React from 'react';
import Link from 'next/link';

interface FooterItemProps {
  subTitle: string;
  subLink: string;
}

export default function FooterItem(props: FooterItemProps) {
  const { subTitle, subLink } = props;
  return (
    <li className='mb-6'>
      <Link href={subLink}>
        <a className='text-lg color-palette-1 text-decoration-none'>
          {subTitle}
        </a>
      </Link>
    </li>
  );
}
