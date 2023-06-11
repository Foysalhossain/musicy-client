import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuOptoins = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/secret'>secret</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl bg-black text-white">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52">
                            {menuOptoins}
                        </ul>
                    </div>
                    <img className='w-28 ml-5' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuOptoins}
                    </ul>
                </div>
                <div className="navbar-end mr-20">
                    {
                        user ? <>
                            <img referrerPolicy="no-referrer" title={user?.displayName} className=' rounded-full w-12 h-12 mr-6' src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className="btn">Sign out</button>
                        </> : <>
                            <Link className='btn ml-3' to='/login'>Login</Link>
                        </>
                    }
                </div>

            </div>
        </>
    );
};

export default Navbar;