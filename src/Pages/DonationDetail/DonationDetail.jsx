import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Donation from '../Home/Donation/Donation';


const DonationDetail = () => {
  const {id} = useParams();
  const [CardDetail, setCardDetail]  = useState({});

  const details = useLoaderData();

    useEffect(() =>{
       const findCardDetails = details?.find((detail) => detail.id == id);
       setCardDetail(findCardDetails);
      }, [id, details])

 const { Picture, Title, Category, Backgrounds, Description, Price} = CardDetail || {};
 const {Category_bg, Card_bg, Text_and_button_color} = Backgrounds || {};


    const handleDonate=() => {

    const addedDonationItem = [];
    const donationGiven = JSON.parse(localStorage.getItem('donationGiven'))
    

  if(!donationGiven){
    addedDonationItem.push(CardDetail)
    localStorage.setItem('donationGiven', JSON.stringify(addedDonationItem));
    console.log(addedDonationItem);
    swal("Good job!", "You Donated for Humanity!", "success")
  }
  else{
    const isExists = donationGiven.find((donation) =>donation.id == id)
    if(!isExists)
    {
    addedDonationItem.push(...donationGiven, CardDetail);
    localStorage.setItem('donationGiven', JSON.stringify(addedDonationItem));
    swal("Good job!", "You Donated for Humanity!", "success")
   }
    else{
      swal("Oops Sorry!", "You already donated for this!", "error")
    }
    
  }
  }

 return (
  <div className=' w-[80%] lg:w-[90%] mx-auto my-8'>
    
    <div className=''>
      <div className='relative my-5 w-full h-[450px]'>
        <img className='w-full h-[450px]' src={Picture} alt="" />
        <div className='absolute bg-black opacity-60 bottom-0 w-full h-[100px]'>
        </div>
          <button onClick={handleDonate} className='absolute bottom-6 left-7 px-7 py-3 rounded-md font-medium text-xl text-white' style={{backgroundColor: Text_and_button_color}}>Donate {Price}</button>
      </div>
      
        <h1 className='py-4 font-bold text-3xl text-black'>{Title}</h1>
        <div className='flex text-justify'>
        <p className='text-gray-600'>{Description}</p>
        </div>
      
    </div>
  </div>
 );
};

export default DonationDetail;