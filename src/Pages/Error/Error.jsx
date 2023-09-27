
import React from 'react';
import { useRouteError } from "react-router-dom";

const Error = () => {
 const error = useRouteError();

 return (
  <div className='h-screen  text-center text-4xl text-black'>
   
      <h1>Oops!</h1>
      {
       error.status === 404 && <h1 className='text-xl p-5'>404 </h1>
      }
      <h1>Page Not Found</h1>
    
   
    
      
  </div>
 );
};

export default Error;