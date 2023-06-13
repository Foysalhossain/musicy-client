import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const MypaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [datas, setDatas] = useState();
    const [axiosSecure] = useAxiosSecure();


    axiosSecure.get(`/payment/${user?.email}`)
        .then(data => {
            setDatas(data.data)
        })


    return (
        <div>
            <h2 className="text-4xl text-center">Popular Instructor</h2>
            <div className="grid grid-cols-3 gap-20 pt-10 pb-10">
                {
                    datas?.map(data => {
                        return (
                            <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={data.image} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">Name: {data.name}</h2>
                                    <p>Instructor Name: {data.instructor}</p>
                                    <p>Available seats: {data.available_seats}</p>
                                    <p>Total Students: {data.students}</p>
                                    <p>Price: {data.price}</p>
                                    <button className="btn btn-active btn-primary">Select</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MypaymentHistory;