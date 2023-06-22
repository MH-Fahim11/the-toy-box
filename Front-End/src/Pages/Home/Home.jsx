import useTitle from "../../hooks/useTitle";
import Gallery from "./Gallery";
import Header from "./Header";
import MostPopular from "./MostPopular";
import NewsLetter from "./NewsLetter";
import ShopByCategories from "./ShopByCategories";



const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <MostPopular></MostPopular>
            <ShopByCategories></ShopByCategories>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;