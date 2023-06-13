import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

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
        <div className="grid grid-cols-3">
            {
                datas?.map(data => {
                    return (
                        <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={data.image} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title"> {data.name}</h2>
                                <p>Instructor Name: {data.instructor}</p>
                                <p>Available seats: {data.available_seats}</p>
                                <p>Total Students: {data.students}</p>
                                <p>Price: {data.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MySelectedClass;