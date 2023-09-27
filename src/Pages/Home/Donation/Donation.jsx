import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';
const Donation = () => {
 const [donations, setDonation] = useState([]);
 const [notFound, setNotFound] = useState(false);
 const [isShow, setIsShow] = useState(false);
 

 useEffect(() =>{
  const donationGiven = JSON.parse(localStorage.getItem('donationGiven'))
 
  if(donationGiven){
   setDonation(donationGiven)
    }else{
     setNotFound('No Data Found')
    }
 }, [])



 return (
  <div>
    {notFound? <p className='h-full text-4xl flex justify-center items-center'>{notFound}</p> 
    :
    
     <div>
      <div className='grid  lg:grid-cols-2'>
       {
        isShow ? donations.map((donation) => (
          <DonationCard key={donation.id} CardDetail={donation}></DonationCard>
          ))
        :
        donations.slice(0,4).map((donation) =>
        <DonationCard key={donation.id} CardDetail={donation}></DonationCard>)
        }
      </div>
      <div className='flex justify-center mb-5'>
      
        {
         donations.length > 4 && 
         <button  onClick={() =>setIsShow(!isShow)} className={`px-6 py-2 block  rounded-md bg-green-500 ${isShow? 'hidden' : ''} text-white  font-medium text-xl`}>See All</button>
        }
       
      
       </div>
       
     </div> }
    
  </div>
 );
};

export default Donation;