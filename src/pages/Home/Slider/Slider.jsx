import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/slider/1.jpg';
import img2 from '../../../assets/slider/2.jpg';
import img3 from '../../../assets/slider/3.jpg';
import img4 from '../../../assets/slider/4.jpg';


const Slider = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={img4} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Slider;