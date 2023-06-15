import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [data, setData] = useState();

    useEffect(() => {
        axiosSecure.get(`/instructorclasses/${user?.email}`)
            .then(data => {
                setData(data?.data);
            })
    }, [])

    return (
        <div className="w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Feedback</th>
                        <th>Status</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((data, index) =>
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
                                    <div>{data.feedback}</div>
                                </td>
                                <td>
                                    <div>{data.status}</div>
                                </td>
                                <td>
                                    <div>${data.price}</div>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClass;

// instructorclasses/:email