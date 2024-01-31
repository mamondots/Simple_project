import { HiOutlineRectangleGroup } from "react-icons/hi2";
import img from '../../assets/img/step.png'
const Book = () => {
    return (
        <div className="lg:px-28 md:px-20 px-12 py-8">
            <div className="grid lg:grid-cols-2 lg:gap-12 gap-2">
                <div>
                    <div className="space-y-2">
                        <p className="text-[#5E6282] font-semibold">Top Selling</p>
                        <h2 className="title lg:w-[45vh] text-[#14183E] lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">Book your next trip in 3 easy steps</h2>
                    </div>

                    <div className="py-8 space-y-3">
                        <div className="flex items-baseline space-x-2">
                            <div className="bg-[#F0BB1F] py-2 px-2 inline-block text-white text-xl rounded-md">
                                <span className="inline-block"><HiOutlineRectangleGroup /></span>
                            </div>

                            <div>
                                <h2 className="text-[#5E6282] font-semibold">Choose Destination</h2>
                                <p className="text-[#5E6282]"> Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-baseline space-x-2">
                            <div className="bg-[#F0BB1F] py-2 px-2 inline-block text-white text-xl rounded-md">
                                <span className="inline-block"><HiOutlineRectangleGroup /></span>
                            </div>

                            <div>
                                <h2 className="text-[#5E6282] font-semibold">Make Payment</h2>
                                <p className="text-[#5E6282]"> Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-baseline space-x-2">
                            <div className="bg-[#F0BB1F] py-2 px-2 inline-block text-white text-xl rounded-md">
                                <span className="inline-block"><HiOutlineRectangleGroup /></span>
                            </div>

                            <div>
                                <h2 className="text-[#5E6282] font-semibold">Reach Airport on Selected Date</h2>
                                <p className="text-[#5E6282]"> Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:ml-40 flex items-center justify-center lg:inline-block">
                     <img className="mt-16" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Book;