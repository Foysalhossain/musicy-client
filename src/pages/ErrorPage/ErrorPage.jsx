import { Link, useRouteError } from "react-router-dom";
import img from '../../assets/error/error.png'

const ErrorPage = () => {
    const ObtainError = useRouteError();
    console.log(ObtainError);
    return (
        <div className="flex justify-center flex-col items-center mt-52 ">
            <img className="w-96" src={img} alt="" />
            <Link to='/'>
                <button className="btn btn-outline btn-secondary my-8">Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;