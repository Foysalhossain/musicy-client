import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    axiosSecure.post('/classes', {

                        image: imgURL,
                        name: data.name,
                        instructor: data.displayName,
                        available_seats: data.seat,
                        email: data.email,
                        price: data.price,
                        status: 'pending',

                    })
                        .then(data => {
                            console.log(data.data);
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Clsdd Added',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                    console.log(imgURL);
                }
            })

    };



    return (
        <div className="w-full px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Instructor Name*</span>
                    </label>
                    <input type="text" {...register("displayName", { required: true })} value={user?.displayName} className="file-input file-input-bordered w-full ps-2" />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Instructor Email*</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} value={user?.email} className="file-input file-input-bordered w-full ps-2" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="text" {...register("seat", { required: true })} className="file-input file-input-bordered w-full pl-2 " />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" {...register("price", { required: true })} className="file-input file-input-bordered w-full pl-2 " />
                </div>

                <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddItem;