import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import homeBanner from "../../../../assets/images/home_banner.png";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <section
      className={cx("banner")}
      style={{
        backgroundImage: `url(${homeBanner})`,
      }}
    ></section>
  );
}

export default Banner;
