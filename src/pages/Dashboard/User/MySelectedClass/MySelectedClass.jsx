import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [datas, setDatas] = useState([])

    useEffect(() => {
        axiosSecure.get(`/userclasses/${user?.email}`)
            .then(data => {
                // console.log(data.data);
                setDatas(data.data)
            })
    }, [user, axiosSecure])
    console.log(datas);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
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
                                        <div>{data.name}</div>
                                    </td>
                                    <td>
                                        <div>${data.price}</div>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/payment/${data._id}`} ><button className="btn btn-active btn-primary">Pay</button></Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-active btn-error">Delete</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;