import services from '../../../public/services.json'

const Services = () => {
    return (
        <div className="lg:px-28 md:px-20 px-12 py-8 lg:mt-12">
            <div className="flex items-center justify-center py-y space-y-2 flex-col">
                <p className="text-[#5E6282] font-semibold">CATEGORY</p>
                <h2 className="title text-[#14183E] lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">We Offer Best Services</h2>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 gap-6 pt-6'>
                {
                    services.map((service, index) => <div key={index}>
                        <div className='flex items-center justify-center flex-col space-y-2 bg-[#fff] border py-4 px-4 hover:bg-[#feecc348] hover:scale-95 duration-300 cursor-pointer'>
                            <div className='w-20 h-20'><img src={service.icon} alt="" /></div>
                            <div className='text-center space-y-2'>
                                <h2 className='text-[#1E1D4C] font-medium'>{service.title}</h2>
                                <p className='text-[#5E6282] pb-1'>{service.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;