import { NavLink, Outlet } from "react-router-dom";
import { FaChalkboardTeacher, FaWallet, FaHome, FaCheckCircle, FaUsers, FaChalkboard, FaRegClipboard, FaPlus } from "react-icons/fa";
import logo from '../../src/assets/logo/logo.png'
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Dashboard = () => {
    // const isAdmin = true;
    // const instructor = false;
    const { user } = useContext(AuthContext);
    const [isInstructor] = useInstructor();
    console.log(isInstructor);

    const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-orange-300 text-black">
                    <div className="text-center flex  justify-center my-8">
                        <img className="w-40 text-center" src={logo} alt="" />
                    </div>
                    <div className="text-center w-full my-4">
                        <div className="flex justify-center">
                            <img className="rounded-[50%] h-24 w-24" src={user.photoURL} alt="" />
                        </div>
                        <h2 className="my-3">User Email: {user.email}</h2>
                    </div>

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manageclasses"><FaHome></FaHome> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Managae Users</NavLink></li>
                        </> : isInstructor ? <>
                            <li><NavLink to="/dashboard/addclass"><FaPlus></FaPlus> Add Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> My Class</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/myClasses"><FaChalkboardTeacher></FaChalkboardTeacher>My Selected Class</NavLink></li>
                            <li><NavLink to="/dashboard/myEnrolmentClass"><FaCheckCircle></FaCheckCircle> My Enrolled Class</NavLink></li>
                        </>
                    }

                    {/* Sidebar content here */}


                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/instructors'><FaRegClipboard></FaRegClipboard> Instructors</NavLink></li>
                    <li><NavLink to='/classes'><FaChalkboard></FaChalkboard> Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;