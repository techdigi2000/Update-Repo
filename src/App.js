import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Setup from "./pages/Setup/Setup";
import Downloading from "./pages/Downloading/Downloading";
import CanonGuide from "./pages/Downloading/canon-setup-guide";

import Loading from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";
import Privacypolicy from "./pages/privacy/Privacypolicy";
import Terms from "./pages/Terms/Terms";
import AboutUs from "./pages/AboutUs/AboutUs";
import EpsonGuide from "./pages/Downloading/epson-setup-guide";
import BrotherGuide from "./pages/Downloading/brother-setup-guide";
import CanonLoading from "./pages/Loading/Canon-Loading";
import EpsonLoading from "./pages/Loading/Epson-Loading";
import BrotherLoading from "./pages/Loading/Brother-Loading";
import CanonError from "./pages/Error/Error-canon";
import EpsonError from "./pages/Error/Error-epson";
import BrotherError from "./pages/Error/Error-brother";

const Layout = () => {
  return (
    <div>
      <Header />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        <Route path="/privacy" element={<Privacypolicy />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/hp-setup-guide" element={<Setup />}></Route>
      <Route path="/setup/downloading" element={<Downloading />}></Route>
      <Route path="/canon-setup-guide" element={<CanonGuide />}></Route>
      <Route path="/epson-setup-guide" element={<EpsonGuide />}></Route>
      <Route path="/brother-setup-guide" element={<BrotherGuide />}></Route>

      <Route path="/setup/loading" element={<Loading />}></Route>
      <Route path="/canon/loading" element={<CanonLoading />}></Route>
      <Route path="/epson/loading" element={<EpsonLoading />}></Route>
      <Route path="/brother/loading" element={<BrotherLoading />}></Route>

      <Route path="/setup/error" element={<Error />}></Route>
      <Route path="/canon/error" element={<CanonError />}></Route>
      <Route path="/epson/error" element={<EpsonError />}></Route>
      <Route path="/brother/error" element={<BrotherError />}></Route>
      <Route path="/setup/officejet" element={<Downloading />}></Route>
      <Route path="/setup/deskjet" element={<Downloading />}></Route>
      <Route path="/setup/laserjet" element={<Downloading />}></Route>
      <Route path="/setup/envy" element={<Downloading />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
