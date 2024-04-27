import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NotFound from "../components/NotFound/NotFound";
import AddTouristSpot from "../components/AddTouristSpot/AddTouristSpot";
import AllTouristsSpots from "../components/AllTouristsSpots/AllTouristsSpots";
import MyLists from "../components/MyList/MyLists";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children:[
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
                path:'/add-tourist-spot',
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path: '/all-tourists-spots',
                element: <AllTouristsSpots></AllTouristsSpots>
            },
            {
                path: '/my-lists',
                element: <MyLists></MyLists>
            }
        ]
    },
]);