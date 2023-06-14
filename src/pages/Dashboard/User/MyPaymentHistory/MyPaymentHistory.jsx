import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const MypaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [datas, setDatas] = useState([]);
    const [axiosSecure] = useAxiosSecure();


    axiosSecure.get(`/payment/${user?.email}`)
        .then(data => {
            setDatas(data.data)
        })


    return (
        <div className="w-full">
            <h2 className="text-4xl text-center mb-10">Popular Instructor</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Course Name</th>
                                <th>Instructor Name</th>
                                <th>Payment</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datas.map((data, index) =>
                                    <tr key={data._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{data.name}</div>
                                        </td>
                                        <td>
                                            <div>{data.instructor}</div>
                                        </td>
                                        <td>
                                            <div>{data.payment}</div>
                                        </td>
                                        <td>
                                            <div>{data.date}</div>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MypaymentHistory;