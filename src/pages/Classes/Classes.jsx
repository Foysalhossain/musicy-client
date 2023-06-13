import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const Classes = () => {
    const { user } = useContext(AuthContext);
    const [datas, setDatas] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
    }, [])

    const selectHandler = () => {
        if (user) {
            // DOne
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
                                <button onClick={selectHandler} className="btn btn-active btn-primary">Select</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Classes;