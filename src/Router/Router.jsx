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
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/tourist-spots')
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
                element: <AllTouristsSpots></AllTouristsSpots>,
                loader: () => fetch('http://localhost:5000/tourist-spots')
            },
            {
                path: '/my-lists/:email',
                element: <PrivetRoute><MyLists></MyLists></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/my-lists/${params.email}`)
            },
            {
                path: '/update-spot/:id',
                element: <PrivetRoute><UpdateSpot></UpdateSpot></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/update-spot/${params.id}`)
            },
            {
                path: '/view-details/:id',
                element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/view-details/${params.id}`)
            },
            {
                path: '/country-spots',
                element: <CountrySpots></CountrySpots>
            }
        ]
    },
]);