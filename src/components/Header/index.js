import clsx from "clsx";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className="header">
      <div className={clsx(styles.container, "parent")}>Header</div>
    </header>
  );
}
export default Header;
