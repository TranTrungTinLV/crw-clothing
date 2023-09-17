import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './routes/navigations/navigations';
import SignIn from './sign-in/SignIn';


const Shop = () => {
  return <h1>Shop</h1>
}
const Contact = () => {
  return <h1>Contact</h1>
}

const BagShop = () => {
  return <h1>Bag</h1>
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='bagshop' element={<BagShop />} />

      </Route>

    </Routes>
  );
}

export default App;
