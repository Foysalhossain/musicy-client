import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/slider/1.jpg';
import img2 from '../../../assets/slider/2.jpg';
import img3 from '../../../assets/slider/3.jpg';


const Slider = () => {
    return (
        <div className="carousel w-[90%] lg:w-full mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute h-full flex items-center  transform -translate-y-1/2 top-1/2 px-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white  space-y-2 lg:space-y-7'>
                        <h2 className='text-2xl lg:text-6xl font-bold'>Learn The Music <br /> From The Masters</h2>
                        <p>Search for Online Classes Courses at HomeAndGardenIdeas. Attractive Results. <br /> Get More Results. Online Information. Popular Searches. Related Searches. Internet Information. </p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute h-full flex items-center  transform -translate-y-1/2 top-1/2 px-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-2 lg:space-y-7'>
                        <h2 className='text-3xl lg:text-6xl font-bold'>Music helps children <br /> develop better human <br /> connections.</h2>
                        <p>Shop thousands of high-quality on-demand online courses. 30-day satisfaction guarantee. <br /> Find the right instructor for you. Choose from many topics, skill levels, and languages</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute h-full flex items-center  transform -translate-y-1/2 top-1/2 px-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-2 lg:space-y-7'>
                        <h2 className='text-3xl lg:text-6xl font-bold'>Music teaches rhythm,  <br /> harmony & patience.</h2>
                        <p>Music festivals are awesome. The music, the people, the vendors. <br /> Who wouldn’t enjoy such an extravaganza of the senses. In winter however, they can present their own unique</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;