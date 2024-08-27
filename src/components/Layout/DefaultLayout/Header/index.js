import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import headerLogo from "../../../../assets/images/logo_remove_bg.png";

const cx = classNames.bind(styles);

function Header() {
  const [categories, setCategories] = useState([]);
  const mainHeaderLeftRef = useRef();
  const mainHeaderRightRef = useRef();
  const bottomHeaderLeftRef = useRef();
  const bottomHeaderRightRef = useRef();

  const handleSetCenter = (element1, element2) => {
    if (element1.clientWidth > element2.clientWidth) {
      element2.style.padding = `0 ${
        (element1.clientWidth - element2.clientWidth) / 2
      }px`;
    } else {
      element1.style.padding = `0 ${
        (element2.clientWidth - element1.clientWidth) / 2
      }px`;
    }
  };

  const openModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  };

  useEffect(() => {
    const categoriesApi =
      "https://66c6333e134eb8f434970d15.mockapi.io/api/categories";
    fetch(categoriesApi)
      .then((res) => res.json())
      .then((data) => {
        setCategories([...data]);
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    handleSetCenter(mainHeaderLeftRef.current, mainHeaderRightRef.current);
  }, []);

  useEffect(() => {
    handleSetCenter(bottomHeaderLeftRef.current, bottomHeaderRightRef.current);
  }, []);

  return (
    <header className={cx("wrapper", "not-parmanent-header")}>
      <div className={cx("main-header")}>
        <div className={cx("main-header-left")} ref={mainHeaderLeftRef}>
          <div className={cx("social")}>
            <a className={cx("main-header-item")} href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a className={cx("main-header-item")} href="#">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a className={cx("main-header-item")} href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className={cx("separate")}></div>
          <div className={cx("contact")}>
            <i class="fa-regular fa-envelope"></i>
            <div>
              <span>Email</span>
              <a
                className={cx("main-header-item")}
                href="mailto:dongnaifarmorganic@gmail.com"
              >
                dnf@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={cx("logo")}>
          <Link to="/">
            <img className={cx("logo-img")} src={headerLogo} alt="logo" />
          </Link>
        </div>
        <div className={cx("main-header-right")} ref={mainHeaderRightRef}>
          <div className={cx("contact")}>
            <i class="fa-solid fa-phone"></i>
            <div>
              <span>Hotline</span>
              <a
                className={cx("main-header-item")}
                href="mailto:dongnaifarmorganic@gmail.com"
              >
                1900 686868
              </a>
            </div>
          </div>
          <div className={cx("separate")}></div>
          <div className={cx("search", "main-header-item")}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className={cx("notification")} onClick={openModal}>
            <i class="fa-solid fa-bell"></i>
          </div>
        </div>
      </div>
      <div className={cx("bottom-header")}>
        <div className={cx("action")} ref={bottomHeaderLeftRef}>
          <Link to="/login">
            <div className={cx("action-user", "action-item")}>
              <i class="fa-solid fa-circle-user"></i>
              <span>Đăng nhập</span>
            </div>
          </Link>
          <div className={cx("action-separate")}></div>
          <Link to="/register">
            <div className={cx("action-user", "action-item")}>
              <span>Đăng ký</span>
            </div>
          </Link>
        </div>
        <nav className={cx("navbar")}>
          <ul className={cx("navbar-list")}>
            <Link to="/">
              <li className={cx("navbar-item")}>trang chủ</li>
            </Link>
            <Link to="/products">
              <li className={cx("navbar-item", "has-dropdown")}>
                sản phẩm<i class="fa-solid fa-angle-down"></i>
                <div className={cx("dropdown")}>
                  {categories.map((cate) => (
                    <Link key={cate.id} to={`/products/${cate.value}`}>
                      <span className={cx("dropdown-item")}>{cate.name}</span>
                    </Link>
                  ))}
                </div>
              </li>
            </Link>
            <Link to="/about">
              <li className={cx("navbar-item")}>về chúng tôi</li>
            </Link>
            <Link to="/service">
              <li className={cx("navbar-item", "has-dropdown")}>
                dịch vụ<i class="fa-solid fa-angle-down"></i>
                <div className={cx("dropdown")}>
                  <Link to={"/service/delivery"}>
                    <span className={cx("dropdown-item")}>giao hàng</span>
                  </Link>
                  <Link to={"/service/distribution"}>
                    <span className={cx("dropdown-item")}>phân phối</span>
                  </Link>
                  <Link to={"/service/franchise"}>
                    <span className={cx("dropdown-item")}>nhượng quyền</span>
                  </Link>
                </div>
              </li>
            </Link>
            <Link to="/contact">
              <li className={cx("navbar-item")}>liên hệ</li>
            </Link>
          </ul>
        </nav>
        <div className={cx("action")} ref={bottomHeaderRightRef}>
          <Link to="/cart">
            <div className={cx("action-cart", "action-item")}>
              <i class="fa-solid fa-cart-shopping"></i>
              <span>0</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
