import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </div>
  );
}
