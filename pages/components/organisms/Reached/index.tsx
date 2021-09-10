import React from 'react';
import ReachedItem from '../../molecules/ReachedItem';

export default function Reached() {
  return (
    <section className='reached pt-50 pb-50'>
      <div className='container-fluid'>
        <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4'>
          <ReachedItem value='290M+' content='Players Top Up' />
          <div className='vertical-line me-lg-35 ms-lg-35 d-lg-block d-none' />
          <div className='horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block' />
          <ReachedItem value='12.500' content='Games Available' />
          <div className='horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block' />
          <div className='vertical-line me-lg-35 ms-lg-35 d-lg-block d-none' />
          <ReachedItem value='99,9%' content='Happy Players' />
          <div className='horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block' />
          <div className='vertical-line me-lg-35 ms-lg-35 d-lg-block d-none' />
          <ReachedItem value='4.7' content='Rating Worldwide' />
        </div>
      </div>
    </section>
  );
}
