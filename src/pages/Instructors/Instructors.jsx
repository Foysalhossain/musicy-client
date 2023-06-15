import { useEffect, useState } from "react";


const Instructors = () => {
    const [datas, setDatas] = useState()
    useEffect(() => {
        fetch('https://musicy-server-gules.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
    }, [])
    return (
        <div className="grid grid-cols-3 gap-6 pt-36">
            {
                datas?.map(data => {
                    return (
                        <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={data.image} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: {data.name}</h2>
                                <p>Email: {data.email}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Instructors;