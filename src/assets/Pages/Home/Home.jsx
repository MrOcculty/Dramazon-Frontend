import './Home.scss'
import Banner from './Banner/Banner'
import Categories from './Categories/Categories'
import Products from './Products/Products'

function Home() {

    return (
        <div>
            <Banner />
            <Categories />
            <Products />
        </div>
    );
}

export default Home;