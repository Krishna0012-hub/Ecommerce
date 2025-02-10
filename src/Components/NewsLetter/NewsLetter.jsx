import React from 'react';

const NewsLetter = () => {
  return (
    <div className='container text-center my-5 p-4 border rounded shadow-lg'>
    <h1 className='mb-3'>Get Exclusive Offers On Your Email</h1>
    <p className='mb-4'>Subscribe to our newsletter and stay updated</p>
    <div className='row justify-content-center'>
      <div className='col-md-6 col-sm-8 col-10'>
        <div className='input-group'>
          <input 
            type='email' 
            className='form-control' 
            placeholder='Your Email ID' 
            aria-label='Your Email ID'
          />
          <button className='btn btn-primary' type='button'>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default NewsLetter;
