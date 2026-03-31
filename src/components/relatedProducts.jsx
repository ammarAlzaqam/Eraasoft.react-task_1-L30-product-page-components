import huaweiImg from "../assets/images/Huawei.png";
import iPhone14Img from "../assets/images/iPhone14.jpg";
import iPhone16Img from "../assets/images/iPhone16.png";
import iPhone17Img from "../assets/images/iPhone17.png";
import ProductCard from "./_productCard";

const productsImgs = [
  {
    img: huaweiImg,
    title: "nova 13 Smartphone With 12GB RAM And 256GB Storage Capacity",
    price: 230,
  },
  {
    img: iPhone14Img,
    title: "Apple iPhone 14 Pro Max, 256GB, Deep Purple",
    price: 450,
  },
  {
    img: iPhone16Img,
    title: "Apple iPhone 16 Pro Max, US Version, 1TB, Natural Titanium",
    price: 900,
  },
  {
    img: iPhone17Img,
    title: "Apple iPhone 17 Pro Max, US Version, 256GB, eSIM, Silver",
    price: 1150,
  },
];

export default function RelatedProducts() {
  return (
    <section id="related-products">
      <div className="container">
        <h3 className="mb-3 pb-3">Related Products</h3>
        <div className="products row g-3">
          {productsImgs.map((p) => (
            <ProductCard p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
