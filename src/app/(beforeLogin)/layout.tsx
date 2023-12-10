import styles from "@/app/page.module.css";

interface BeforeLoginLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function BeforeLoginLayout({
  children,
  modal,
}: BeforeLoginLayoutProps) {
  return (
    <div className={styles.container}>
      비포 로그인 레이아웃 {children} {modal}
    </div>
  );
}
