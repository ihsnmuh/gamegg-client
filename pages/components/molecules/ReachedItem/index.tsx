import React from 'react';

interface ReachedItemProps {
  value: string;
  content: string;
}

export default function ReachedItem(props: ReachedItemProps) {
  const { value, content } = props;

  return (
    <div className='me-lg-35 ms-lg-35'>
      <p className='text-4xl text-lg-start text-center color-palette-1 fw-bold m-0'>
        {value}
      </p>
      <p className='text-lg text-lg-start text-center color-palette-2 m-0'>
        {content}
      </p>
    </div>
  );
}
