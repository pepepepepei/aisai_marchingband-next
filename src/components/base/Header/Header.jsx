import styles from "./Header.module.scss";

export default function Header({ title, isTopPage }) {
  return isTopPage ? (
    <header className={`${styles.root} ${styles.top}`}>
      <h1 className={styles.tagline}>
        地域に愛される
        <br />
        マーチングバンドを
        <br class="only-s" />
        目指して
      </h1>
      <span className={styles.scroll_arrow}>SCROLL</span>
    </header>
  ) : (
    <header className={styles.root}>
      <h1>{title}</h1>
    </header>
  );
}
