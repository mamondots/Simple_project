import Banner from "../Banner/Banner";
import Book from "../Book/Book";
import Brands from "../Brands/Brands";
import Destronation from "../Destronation/Destronation";
import Services from "../Services/Services";
import Subcribes from "../Subcribes/Subcribes";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Destronation></Destronation>
            <Book></Book>
            <Testimonial></Testimonial>
            <Brands></Brands>
            <Subcribes></Subcribes>
        </div>
    );
};

export default Home;