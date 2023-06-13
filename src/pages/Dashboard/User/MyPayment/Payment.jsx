import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";



// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/userclasses/${user?.email}`)
            .then(data => {
                // console.log(data.data);
                setDatas(data.data)
            })
    }, [user, axiosSecure])
    const existClass = datas?.find(exist => exist._id === id);
    console.log(existClass);


    return (
        <div className="w-full ml-10">
            <h2 className="text-center">Payment Please</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={existClass?.price} id={existClass?._id}> </CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;