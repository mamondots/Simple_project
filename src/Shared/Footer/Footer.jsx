import img from '../../assets/img/Google Play.png'
import img2 from '../../assets/img/Play Store.png'
const Footer = () => {
    return (
        <div className="lg:px-28 md:px-20 px-12 mt-8 pb-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-3">

            <div>
                <h2 className="text-[#181E4B] text-xl font-bold">MamonDots</h2>
                <p className="text-[#5E6282] text-sm py-2">
                    Book your trip in minute, get full
                    Control for much longer.

                </p>
            </div>

            <div>
                <h2 className="text-[#181E4B]  font-bold">Company</h2>
                <ul className="py-2 space-y-1 text-[#5E6282]">
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">About</a></li>
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">Careers</a></li>
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">Mobile</a></li>
                </ul>
            </div>

            <div>
                <h2 className="text-[#181E4B]  font-bold">Contact</h2>
                <ul className="py-2 space-y-1 text-[#5E6282]">
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">Help/FAQ</a></li>
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">Press</a></li>
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">Affilates</a></li>
                </ul>
            </div>

            <div>
                <h2 className="text-[#181E4B]  font-bold">More</h2>
                <ul className="py-2 space-y-1 text-[#5E6282]">
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">Airlinefees</a></li>
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">Airline</a></li>
                    <li className='hover:text-[#FF7D68] duration-300 cursor-pointer'><a href="">Low fare tips</a></li>
                </ul>
            </div>

            <div>
                <h2 className="text-[#181E4B]  font-bold">Discover our app</h2>
                <div className='flex items-center space-x-1 pt-4'>
                     <img src={img} alt="" />
                     <img src={img2} alt="" />
                </div>
            </div>

        </div>

         <div>
             <h2 className='text-sm text-center text-[#5E6282] py-2 mt-4'>All rights mamonrabin@gmail.com</h2>
         </div>
    </div>
    );
};

export default Footer;