export default function ProductCard({ p, i }) {
  return (
    <div
      data-aos={
        innerWidth > 991 ? "fade-up" : i % 2 == 0 ? "fade-right" : "fade-left"
      }
      className="col-12 col-md-6 col-lg-3"
    >
      <div className="product-card d-flex flex-column gap-3">
        <img src={p.img} alt="product-img" />
        <h4>{p.title}</h4>
        <span>${p.price}</span>
        <button className="btn btn-dark">Add To Cart</button>
      </div>
    </div>
  );
}
