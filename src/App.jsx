import Footer from "./components/footer";
import Header from "./components/mainHeader";
import ProductDetails from "./components/productDetails";
import RelatedProducts from "./components/relatedProducts";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  Aos.init({
    duration: 1200,
    once: true,
  });

  return (
    <>
      <Header />
      <ProductDetails />
      <RelatedProducts />
      <Footer />
    </>
  );
}
