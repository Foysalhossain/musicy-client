import img from '../../../../assets/joinclass/class.jpg'

const JoinOurClass = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-4xl font-semibold mt-10 mb-8'>Join Our Master Class</h2>
            <div className='grid grid-cols-2 gap-10 items-center'>
                <div>
                    <h3 className="text-3xl font-semibold">Learn The Music From The Core & Become Mastery</h3>
                    <p>The purpose of mastering is to balance the sonic elements of a stereo mix and optimize playback across all systems and media formats. Traditionally, mastering is done using tools like equalization, compression, limiting and stereo enhancement.
                    </p>
                </div>
                <div>
                    <img className='rounded-xl' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default JoinOurClass;