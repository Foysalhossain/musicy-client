import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";


const PopularClasses = () => {
    const { user } = useContext(AuthContext);
    const [datas, setDatas] = useState();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
    }, [])

    const selectHandler = (id) => {
        if (user) {
            const userSelectedClass = datas.find(data => data._id === id);
            console.log(userSelectedClass);
            const selectedClass = { ...userSelectedClass, email: user?.email }
            axiosSecure.post("/userclasses", selectedClass)
                .then(data => {
                    console.log(data.data);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }
        else {
            navigate("/login");
        }
    }

    return (
        <div className="mt-16">
            <h2 className="text-4xl text-center font-semibold">Popular Class</h2>
            <p className="text-center mt-6">Here Our Popular Classes</p>
            <div className="grid md:grid-cols-3 gap-20 mt-10 pb-10">
                {
                    datas?.slice(0, 6).map(data => {
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
                                    <button onClick={() => selectHandler(data._id)} className="btn btn-active btn-primary">Select</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PopularClasses;