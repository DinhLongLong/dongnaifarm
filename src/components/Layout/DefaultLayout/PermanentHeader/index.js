import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./PermanentHeader.module.scss";

const cx = classNames.bind(styles);

function PermanentHeader() {
  const [headerIsHide, setHeaderIsHide] = useState(true);
  const [categories, setCategories] = useState([]);
  const parmanentHeaderRef = useRef();
  const parmanentHeaderLeftRef = useRef();
  const parmanentHeaderRightRef = useRef();

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
    const setNavbarCenter = (element1, element2) => {
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
    setNavbarCenter(
      parmanentHeaderLeftRef.current,
      parmanentHeaderRightRef.current
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let notParmanentHeaderHeight = document.querySelector(
        ".not-parmanent-header"
      ).clientHeight;
      window.scrollY > notParmanentHeaderHeight
        ? (parmanentHeaderRef.current.style.bottom = `calc(100% - ${parmanentHeaderRef.current.clientHeight}px)`)
        : (parmanentHeaderRef.current.style.bottom = "100%");

      setHeaderIsHide(!window.scrollY > notParmanentHeaderHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerIsHide]);

  return (
    <div className={cx("wrapper")} ref={parmanentHeaderRef}>
      <div className={cx("action")} ref={parmanentHeaderLeftRef}>
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
                    <li className={cx("dropdown-item")}>{cate.name}</li>
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
                  <li className={cx("dropdown-item")}>giao hàng</li>
                </Link>
                <Link to={"/service/distribution"}>
                  <li className={cx("dropdown-item")}>phân phối</li>
                </Link>
                <Link to={"/service/franchise"}>
                  <li className={cx("dropdown-item")}>nhượng quyền</li>
                </Link>
              </div>
            </li>
          </Link>
          <Link to="/contact">
            <li className={cx("navbar-item")}>liên hệ</li>
          </Link>
        </ul>
      </nav>
      <div className={cx("action")} ref={parmanentHeaderRightRef}>
        <Link to="/cart">
          <div className={cx("action-cart", "action-item")}>
            <i class="fa-solid fa-cart-shopping"></i>
            <span>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PermanentHeader;
