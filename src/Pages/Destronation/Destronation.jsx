import destronation from '../../../public/destonation.json'
import { FaLocationArrow } from "react-icons/fa6";

const Destronation = () => {
    return (
        <div className="lg:px-28 md:px-20 px-12 py-8">
            <div className="flex items-center justify-center py-y space-y-2 flex-col">
                <p className="text-[#5E6282] font-semibold">Top Selling</p>
                <h2 className="title text-[#14183E] lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">Top Destinations</h2>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8'>
                 {
                    destronation.map((data,index) => <div key={index}>
                            <div className='flex group cursor-pointer justify-center items-center flex-col border bg-[#fff] p-2 rounded-3xl lg:inline-block'>
                                <div className='overflow-hidden'><img className='group-hover:scale-105 duration-300' src={data.img} alt="" /></div>
                                <div className='px-4 py-2'>
                                     <div className='flex items-center justify-between'>
                                         <h2 className='text-[#5E6282] font-medium'>{data.title}</h2>
                                         <p className='text-[#5E6282]'>${data.price}</p>
                                     </div>
                                     <p className='flex items-center text-[#5E6282] font-semibold py-1 text-sm space-x-1'>
                                        <span><FaLocationArrow /></span>
                                        <span>{data.days}</span> Days Trip
                                     </p>
                                </div>
                            </div>
                    </div>)
                 }
            </div>
        </div>
    );
};

export default Destronation;