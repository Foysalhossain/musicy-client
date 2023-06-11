import { useForm } from "react-hook-form";
import signupImg from "../../assets/signup/1.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password, data.photo)
            .then(result => {
                const loggedUser = (result.user, result.photo);
                console.log(loggedUser);
                updatedUser(result.user, result.photo)
                Swal.fire({
                    title: 'User Sign Up Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    };


    const updatedUser = (user, userName, photo) => {
        updateProfile(user, {
            displayName: userName, photoURL: photo
        }).then(() => {

        }).catch(() => {

        });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-20">
                    <img src={signupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Sign up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 mt-2">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name='photo' placeholder="photo url" className="input input-bordered" required />
                            {errors.photo && <span className="text-red-600 mt-2">Photo is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 mt-2">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                            })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-600 mt-2">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600 mt-2">Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600 mt-2">Password must be less then 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600 mt-2">Password must have one uppercase one, lower case, one number and one special characters</span>}
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='ml-10 mb-6'><small>Already have an account? <Link className="text-blue-600" to="/login">Please Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;