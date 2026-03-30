import logo from "../assets/images/Logo.png";
import hartIcon from "../assets/images/icons/header/hart.svg";
import cartIcon from "../assets/images/icons/header/cart.svg";
import userIcon from "../assets/images/icons/header/user.svg";

export default function Header() {
  return (
    <header className="bg-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <img src={logo} alt="logo-img" />
        <div className="search-input d-none d-lg-flex align-items-center gap-3 rounded-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.75 16.75L12.9723 12.9656M15.0658 7.90789C15.0658 9.80629 14.3117 11.6269 12.9693 12.9693C11.6269 14.3117 9.80629 15.0658 7.90789 15.0658C6.0095 15.0658 4.18886 14.3117 2.8465 12.9693C1.50413 11.6269 0.75 9.80629 0.75 7.90789C0.75 6.0095 1.50413 4.18886 2.8465 2.8465C4.18886 1.50413 6.0095 0.75 7.90789 0.75C9.80629 0.75 11.6269 1.50413 12.9693 2.8465C14.3117 4.18886 15.0658 6.0095 15.0658 7.90789V7.90789Z"
              stroke="#989898"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <input type="text" placeholder="Search" />
        </div>
        <nav className="d-none d-md-flex gap-5">
          <a className="active" href="#">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
        </nav>
        <div className="icons d-none d-xl-flex gap-4">
          <img src={hartIcon} alt="hart-icon" />
          <img src={cartIcon} alt="cart-icon" />
          <img src={userIcon} alt="user-icon" />
        </div>
        <div className="d-flex d-md-none">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
              fill="#080341"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
              fill="#080341"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
              fill="#080341"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
