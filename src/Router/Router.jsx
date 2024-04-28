import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NotFound from "../components/NotFound/NotFound";
import AddTouristSpot from "../components/AddTouristSpot/AddTouristSpot";
import AllTouristsSpots from "../components/AllTouristsSpots/AllTouristsSpots";
import MyLists from "../components/MyList/MyLists";
import UpdateSpot from "../components/UpdateSpot/UpdateSpot";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import CountrySpots from "../components/CountrySpots/CountrySpots";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-tourist-spot',
                element: <PrivetRoute><AddTouristSpot></AddTouristSpot></PrivetRoute>
            },
            {
                path: '/all-tourists-spots',
                element: <AllTouristsSpots></AllTouristsSpots>
            },
            {
                path: '/my-lists',
                element: <PrivetRoute><MyLists></MyLists></PrivetRoute>
            },
            {
                path: '/update-spot',
                element: <PrivetRoute><UpdateSpot></UpdateSpot></PrivetRoute>
            },
            {
                path: '/view-details',
                element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>
            },
            {
                path: '/country-spots',
                element: <CountrySpots></CountrySpots>
            }
        ]
    },
]);