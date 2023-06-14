import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/User/MySelectedClass/MySelectedClass";
import MyEnrolmentClass from "../pages/Dashboard/User/MyEnrolmentClass/MyEnrolmentClass";
import Payment from "../pages/Dashboard/User/MyPayment/Payment";
import MypaymentHistory from "../pages/Dashboard/User/MyPaymentHistory/MyPaymentHistory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myClasses',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'myEnrolmentClass',
                element: <MyEnrolmentClass></MyEnrolmentClass>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'paymenthistory',
                element: <MypaymentHistory></MypaymentHistory>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
]);