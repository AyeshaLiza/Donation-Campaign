import React from 'react';

import { Link } from 'react-router-dom';

const Cards = ({category}) => {
 const {id, Picture, Title, Category, Backgrounds, Description, Price} = category || {};

  const {Category_bg, Card_bg, Text_and_button_color} = Backgrounds || {};
 
 return (
  <div>
     <Link to={`/card/${id}`}>
     <div className="card card-compact  w-96 md:w-72 h-72 shadow-xl " style={{backgroundColor: Card_bg}} >
  <figure>
     <img src={Picture} className='w-96 md:w-72 h-48' alt="Card" />
  </figure>
  <div className="card-body">
   <div className='flex justify-between font-medium'>
     <div className='px-2 py-1 rounded-md' style={{backgroundColor: Category_bg}}><h2 style={{color: Text_and_button_color}}>{Category}</h2></div>
     <h2>{Price}</h2>
   </div>
   

    <h1 className="card-title text-xl" style={{color: Text_and_button_color}}>{Title}</h1>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</Link>
  </div>
 );
};

export default Cards;