import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import Category from './assets/Pages/Category/Category'
import Navbar from './assets/Components/Header/Navbar'
import Newsletter from './assets/Components/Footer/Newsletter'
import Footer from './assets/Components/Footer/Footer'
import SingleProduct from './assets/Pages/SingleProduct/SingleProduct'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppContextProvider from './utils/context'
import OCprovider from './utils/dialogOpener'
import AllCategories from './assets/Pages/AllCategories/AllCategories'

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Router>
        <OCprovider>
          <AppContextProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/:id' element={<Category />} />
              <Route path='/SingleProduct/:id' element={<SingleProduct />} />
              <Route path='/AllCategories' element={<AllCategories />} />
            </Routes>
            <Newsletter />
            <Footer />
          </AppContextProvider>
        </OCprovider>
      </Router>
    </QueryClientProvider>
  )
}

export default App
