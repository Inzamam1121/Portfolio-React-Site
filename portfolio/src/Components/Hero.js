/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import heroImage from '../assets/se.jpg';

function Hero() {
  return (
    <div className='relative w-full h-full'>
      <img
        src={heroImage}
        alt='Hero Section Image'
        className='w-full'
      />
      <div className='absolute top-1/2 right-0 transform ease-linear duration-300 translate-y-1/2  p-6 text-white'>
        <h1 className='text-4xl font-bold mb-4 text-right'>Inzamam Yousaf</h1>
        <p className='text-lg text-right'>I am a Software Engineer. Let's have a brief introduction.</p>
      </div>
    </div>
  );
}

export default Hero;
