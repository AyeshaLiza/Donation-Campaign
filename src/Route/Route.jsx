import MainLayout from "../Layout/MainLayout";
import {
 createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Home/Donation/Donation";
import DonationDetail from "../Pages/DonationDetail/donationDetail";
import Statictics from "../Pages/Statictics/Piechart/statistics";
import Error from "../Pages/Error/Error"; 

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
     {
      path: "/",
      element: <Home></Home>,
      loader: () =>fetch('/FakeJsonData.json')
     },
     {
      path: "/donation",
      element: <Donation></Donation>
     },
     
     {
      path: "/statistics",
      element: <Statictics></Statictics>
     },
     {
      path: "/card/:id",
      element: <DonationDetail></DonationDetail>,
      loader: () =>fetch('/FakeJsonData.json')
     }



    ]
  },
]);


export default myCreatedRoute;