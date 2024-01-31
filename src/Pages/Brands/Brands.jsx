import brands from '../../../public/brand.json'
const Brands = () => {
    return (
        <div className="lg:px-28 md:px-20 px-12 py-8">
            <div className='flex justify-center items-center flex-wrap lg:gap-16 gap-4'>
                {
                   brands.map((brand,index) => <div key={index}>
                      <div className='opacity-30 hover:opacity-100 duration-300 cursor-pointer'>
                        <img src={brand.brans_icon} alt="" />
                      </div>
                   </div>) 
                }
            </div>
        </div>
    );
};

export default Brands;