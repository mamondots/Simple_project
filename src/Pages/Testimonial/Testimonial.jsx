import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonal from '../../../public/testiminal.json'
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="lg:px-28 md:px-20 px-12 py-8">
            <div className="flex items-center justify-center py-y space-y-2 flex-col">
                <p className="text-[#5E6282] font-semibold">Testimonials</p>
                <h2 className="title text-[#14183E] lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">What people say about Us.</h2>
            </div>

            <div className="py-4 mt-6">
                <Slider {...settings}>
                    {
                        testimonal.map((data, index) => <div key={index}>
                            <div className="flex items-center justify-center text-center flex-col space-y-1">
                                <h2 className="text-[#5E6282] text-lg font-semibold">{data.name}</h2>
                                <p className="text-[#5E6282] text-sm">{data.country}</p>
                                <p className="text-[#5E6282] lg:w-[70%]">{data.feedback}</p>
                                <div className="py-2">
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={data.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;