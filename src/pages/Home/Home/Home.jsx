import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";
import JoinOurClass from "./JoinOurClass/JoinOurClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <JoinOurClass></JoinOurClass>
        </div>
    );
};

export default Home;