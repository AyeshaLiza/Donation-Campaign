import Banner from "../../Component/header/Navbar/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import DonationCategory from "../../Component/Donation/DonationCtegories";

const Home = () => {
  const categories = useLoaderData();
  
 return (
  <div>
    <div className="w-[100%]">
    <Banner></Banner>
    </div>
    <DonationCategory categories={categories}></DonationCategory>

  </div>
 );
};

export default Home;