import { useRef } from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import homeBanner1 from "../../../../assets/images/home_banner_1.png";
import homeBanner2 from "../../../../assets/images/home_banner_2.png";

const cx = classNames.bind(styles);

function Carousel() {
  const bannerListRef = useRef();
  let distance = 0;

  const handleArrowLeftBtn = () => {
    let bannerItems = bannerListRef.current.getElementsByTagName("div");
    let maxDistance =
      [...bannerItems].reduce((temp, item) => {
        return (temp += item.clientWidth);
      }, 0) - bannerListRef.current.clientWidth;

    distance === maxDistance
      ? (distance = 0)
      : (distance += bannerListRef.current.clientWidth);

    bannerListRef.current.style.transform = `translateX(-${distance}px)`;
  };

  const handleArrowRightBtn = () => {
    let bannerItems = bannerListRef.current.getElementsByTagName("div");
    let maxDistance =
      [...bannerItems].reduce((temp, item) => {
        return (temp += item.clientWidth);
      }, 0) - bannerListRef.current.clientWidth;

    if (distance === 0) {
      distance = maxDistance;
      bannerListRef.current.style.transform = `translateX(-${distance}px)`;
    } else {
      distance -= bannerListRef.current.clientWidth;
      bannerListRef.current.style.transform = `translateX(${distance}px)`;
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("banner-list")} ref={bannerListRef}>
        <div className={cx("banner-item")}>
          <img
            className={cx("banner-item-img")}
            src={homeBanner1}
            alt="banner-1"
          />
        </div>
        <div className={cx("banner-item")}>
          <img
            className={cx("banner-item-img")}
            src={homeBanner2}
            alt="banner-2"
          />
        </div>
      </div>
      <div className={cx("order-ads")}>
        <span className={cx("order-ads-text1")}>nông sản sạch</span>
        <span className={cx("order-ads-text2")}>đồng nai</span>
        <div className={cx("order-ads-btn")}>
          <div className={cx("order-ads-btn-left")}></div>
          <div className={cx("order-ads-btn-right")}></div>
          <span className={cx("order-ads-btn-text")}>mua ngay</span>
        </div>
      </div>
      <div
        className={cx("arrow-btn", "arrow-btn-left")}
        onClick={handleArrowLeftBtn}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div
        className={cx("arrow-btn", "arrow-btn-right")}
        onClick={handleArrowRightBtn}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default Carousel;
