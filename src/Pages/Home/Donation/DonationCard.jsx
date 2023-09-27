import React from 'react';

const DonationCard = ({CardDetail}) => {
 const { Picture, Title, Category, Backgrounds, Description, Price} = CardDetail || {};
 const {Category_bg, Card_bg, Text_and_button_color} = Backgrounds || {};

 return (
  
  <div className='w-[80%] mx-auto my-5'>
  <div className="card card-side " style={{backgroundColor: Card_bg}}>
  <figure><img className='w-80 h-60' src={Picture} alt="Movie"/></figure>
  <div className="card-body">
     <h1 className='px-2 py-0 font-medium' style={{backgroundColor: Category_bg, color:Text_and_button_color}}>{Category}</h1>
    <h2 className="card-title">{Title}</h2>
    <h1 className='font-medium text-xl' style={{ color:Text_and_button_color}}>{Price}</h1>
    <div className="card-actions ">
      <button className="text-white rounded-md font-medium py-2 px-3" style={{backgroundColor: Text_and_button_color}}>View More</button>
    </div>
  </div>
</div>
  </div>
  
 );
};

export default DonationCard;