import { HiOutlineMail } from "react-icons/hi";

const Subcribes = () => {
    return (
        <div className="lg:px-28 md:px-20 px-12 py-8">
            <h2 className="text-xl font-bold text-center text-[#5E6282]">
                Subscribe to get information, latest news and other <br></br>
                interesting offers about Cobham
            </h2>

            <div className="py-4 mt-6 flex items-center justify-center">
                <form className="flex items-center space-x-3">
                    <div className="flex items-center px-3 py-2 border space-x-1 rounded lg:w-[60vh]">
                        <span><HiOutlineMail /></span>
                        <input className="outline-none w-full" type="text" placeholder="Your Email..." />
                    </div>
                    <div>
                        <button className="py-2 px-4 text-white bg-[#FF7D68] hover:bg-[#f35959] duration-300 cursor-pointer">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Subcribes;