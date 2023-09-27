
const Banner = () => {

 return (
  <div className='h-96 w-[100%]'>
    <div className="h-96 bg-cover hero " style={{backgroundImage: 'url(/donation.jpeg)'}}>

  <div className="hero-overlay bg-white  bg-opacity-90"></div>

  <div className="hero-content text-center text-neutral-content">

    <div>
      <h1 className="mb-5 py-5 text-5xl font-bold text-black">I Grow By Helping People in Need</h1>

      <input  type="text" placeholder="Search Here" className="input text-xl text-black input-bordered w-96 h-14 relative " id="coupon-code" />

     <button className= "w-24 h-14 -ml-24  absolute  rounded-r-lg bg-red-600 text-white"  id="applyCoupon-btn">Search</button>
    </div>

  </div>
</div>
  </div>
 );
};

export default Banner;