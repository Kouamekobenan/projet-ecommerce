import Banniere from "./components/Banniere";
import Category from "./components/Category";
import Product from "./components/Product";
import NewProduct from "./components/NewProduct";
import Pub from "./components/Pub";
import Footer from "./components/Footer";
import Joins from "./components/Joins";
import Payment from "./components/Payment";
export default function Home() {
  return (
    <div className="container">
      <Banniere />
      <Category />
      <Product />
      <NewProduct />
      <Pub />
      <Payment />
      <Joins />
      <Footer />
    </div>
  );
}
