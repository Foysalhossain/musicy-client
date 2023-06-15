import { Slide } from 'react-awesome-reveal';
import img from '../../../../assets/joinclass/class.jpg'

const JoinOurClass = () => {
    return (
        <div className='mx-10 md:mx-auto my-20'>
            <h2 className='text-center text-2xl md:text-4xl font-semibold mt-10 mb-8'>Join Our Master Class</h2>
            <div className='grid md:grid-cols-2 gap-10 items-center'>
                <div>
                    <Slide>
                        <img className='rounded-xl' src={img} alt="" />
                    </Slide>
                </div>
                <div>
                    <Slide>
                        <h3 className=" md:text-3xl font-semibold mb-6">Learn The Music From The Core & Become Mastery</h3>
                        <p>The purpose of mastering is to balance the sonic elements of a stereo mix and optimize playback across all systems and media formats. Traditionally, mastering is done using tools like equalization, compression, limiting and stereo enhancement.
                        </p>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default JoinOurClass;