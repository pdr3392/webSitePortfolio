import Link from "next/link";
import styles from "../styles/fromScratchHeader.module.scss";
import generalStyles from "../styles/fromScratch.module.scss";

export default function Header() {
  return (
    <header className={`${generalStyles.container} ${styles.headerContainer}`}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="images/FromScratchLogo.svg" alt="logo" />
          </a>
        </Link>
      </div>
    </header>
  );
}
