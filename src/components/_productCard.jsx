export default function ProductCard({ p }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="product-card d-flex flex-column gap-3">
        <img src={p.img} alt="product-img" />
        <h4>{p.title}</h4>
        <span>${p.price}</span>
        <button className="btn btn-dark">Add To Cart</button>
      </div>
    </div>
  );
}
