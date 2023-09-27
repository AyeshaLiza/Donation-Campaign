import React from 'react';
import Cards from './Cards';

const DonationCategory = ({categories}) => {
 return (
  <div className=' lg:w-[90%] flex justify-center mx-auto'>
  <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 my-10  gap-5'>
    {
     categories?.map(category=> <Cards key={category.id} category={category} ></Cards>)
    }
  </div>
  </div>
 );
};

export default DonationCategory;