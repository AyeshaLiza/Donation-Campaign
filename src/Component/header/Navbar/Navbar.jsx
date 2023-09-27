import { NavLink } from 'react-router-dom';


const Navbar = () => {
 return (
  <div className='w-[90%] mx-auto'>
    <nav className='flex justify-between items-center  my-5'>
    <div className="flex gap-5">
   <img src="/Group.png" alt="" />
   <div className="text-3xl font-bold ">
    <h1 className="text-red-600">Donation</h1>
    <h1 className="font-medium">Campaign</h1>
   </div>
  </div>
     <ul className='flex gap-5 text-xl font-medium'>
     <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-700 underline" : ""
  }
>
 Home
</NavLink>

<li>
<NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-700 underline" : ""
  }
>
  Donation
</NavLink>
</li>

<li>
<NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-700 underline" : ""
  }
>
  Statistics
</NavLink>
</li>
     </ul>
    </nav>
  </div>
 );
};

export default Navbar;