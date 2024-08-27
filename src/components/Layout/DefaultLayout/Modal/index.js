import { useRef } from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Modal() {
  const modalRef = useRef();

  const cancelModal = () => {
    modalRef.current.style.display = "none";
  };

  return (
    <div className={cx("wrapper", "modal")} ref={modalRef}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <span>thông báo</span>
          <div className={cx("cancel-btn")} onClick={cancelModal}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className={cx("content")}>
          <ul className={cx("notification-list")}>
            <li className={cx("notification-item")}>
              <span className={cx("notification-item-header")}>
                siêu sale dịp lễ vu lan
              </span>
              <span className={cx("notification-item-content")}>
                Nhân dịp lễ Vu Lan, DongNaiFarm khuyến mãi 20% cho các mặt hàng
                rau củ. Nhằm đáp ứng cho nhu cầu ăn chay của quý khách hàng
                trong dịp lễ lớn này.
              </span>
            </li>
            <div className={cx("separate")}></div>
            <li className={cx("notification-item")}>
              <span className={cx("notification-item-header")}>
                tạm ngừng kinh doanh dịp lễ quốc khánh
              </span>
              <span className={cx("notification-item-content")}>
                Thông báo đến quý khánh hàng, từ T7 ngày 31/8 đến T3 ngày 3/9,
                DongNaiFarm tạm ngừng kinh doanh. Sau lễ, chúng tôi sẽ quay lại
                hoạt động bình thường để phục vụ quý khách hàng
              </span>
            </li>
            <div className={cx("separate")}></div>
            <li className={cx("notification-item")}>
              <span className={cx("notification-item-header")}>
                nhanh tay đăng ký thành viên để nhận vô vàn ưu đãi
              </span>
              <span className={cx("notification-item-content")}>
                Đăng ký thành viên của DongNaiFarm ngay để được tham gia chương
                trình tích điểm nhận quà và khuyến mãi với mỗi lần mua hàng tại
                cửa hàng
              </span>
            </li>
            <div className={cx("separate")}></div>
            <li className={cx("notification-item")}>
              <span className={cx("notification-item-header")}>
                ủng hộ thanh long để giúp đỡ bà con nhà nông
              </span>
              <span className={cx("notification-item-content")}>
                Lá lành đùm lá rách, DongNaiFarm hiện đang đưa thanh long tới
                tay quý khách hàng với giá gốc tại nhà vườn, mọi người hãy chung
                tay giúp đỡ bà con nông dân
              </span>
            </li>
            <div className={cx("separate")}></div>
          </ul>
        </div>
      </div>
      <div className={cx("overlay")} onClick={cancelModal}></div>
    </div>
  );
}

export default Modal;
