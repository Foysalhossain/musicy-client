import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Classes = () => {
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
        <div className="grid grid-cols-3 gap-6 pt-36 pb-36">
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
                                <button onClick={() => selectHandler(data._id)} className="btn btn-active btn-primary">Select</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Classes;