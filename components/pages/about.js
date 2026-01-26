import css from "./style.module.scss";
import styles from "./about.module.scss";

export default function AboutContent() {
  return (
    <div className={css.wrapper}>
      <div className={css.page_title}>তাফসীর সম্পর্কে</div>
      <div className={css.page_item}>
        <div className={styles.quran_content}>
          <p>কুরআনুল কারীম</p>
          <p>বাংলা অনুবাদ ও সংক্ষিপ্ত তাফসীর</p>
          <p>ড. আবু বকর মুহাম্মদ যাকারিয়া কতৃক প্রণীত</p>
        </div>
      </div>
    </div>
  );
}
