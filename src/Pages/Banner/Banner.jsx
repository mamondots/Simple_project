import './Banner.css'
import { FaPlay } from "react-icons/fa";

import img01 from '../../assets/img/Decore.png'
import img02 from '../../assets/img/Image.png'

const Banner = () => {
    return (
        <div className="grid lg:grid-cols-2">
            <div className="lg:px-28 md:px-20 px-12 pt-8 relative z-10">
                <p className="text-[#DF6951] font-bold py-2">Best Destinations around the world</p>
                <h2 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold text-[#181E4B] py-2">Travel,enjoy and live a new and full life</h2>
                <p className='text-[#5E6282] py-2'>
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening.
                    Park gate sell they west hard for the.
                </p>

                <div className='flex items-center flex-wrap py-4 lg:space-x-4 lg:gap-1 gap-4'>
                     <button className='py-3 px-4 rounded-md bg-[#F1A501] text-[#fff] hover:bg-[#DF6951] duration-300'>Find out more</button>
                     <button className='flex items-center justify-center space-x-2 group'>
                        <span className='bg-[#DF6951]  group-hover:bg-transparent group-hover:text-[#DF6951] duration-300 cursor-pointer px-4 py-4 text-center rounded-full text-[#fff] border border-[#DF6951]'><FaPlay /></span>
                        <span className='text-[#686D77] text-lg font-medium group-hover:text-[#DF6951] duration-300'>Play Demo</span>
                     </button>
                </div>
            </div>


            <div>
                    <div className='top-0 right-0 w-[38%] absolute'>
                        <img src={img01} alt="" />
                    </div>
                    <div className='top-16 right-25 absolute w-[40%] hidden lg:block'>
                        <img src={img02} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Banner;