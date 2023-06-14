import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);


    const { data = [], refetch } = useQuery({
        queryKey: ['userClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/userclasses/${user.email}`)
            console.log(res.data);
            return res.data

        }
    })


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`deleteclass/${id}`)
                    .then(data => {
                        console.log(data.data);

                    })

            }
        })
    }

    return (
        <div className="w-full">
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
                            data.map((data, index) =>
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
                                        <button onClick={() => handleDelete(data._id)} className="btn btn-active btn-error">Delete</button>
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