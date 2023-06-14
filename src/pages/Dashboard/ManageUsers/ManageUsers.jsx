import { useContext, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const [users, setUsers] = useState();
    const { loading } = useContext(AuthContext);
    axiosSecure.get('/users')
        .then(data => {
            setUsers(data.data);
        })
    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Instructor</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((data, index) =>
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
                                    <div>{data.email}</div>
                                </td>
                                <td>
                                    <div>{data.role}</div>
                                </td>
                                <td>
                                    <div>
                                        <button className="btn btn-success">Instructor</button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <button className="btn btn-warning">Admin</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;