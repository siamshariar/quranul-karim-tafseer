import css from "./style.module.scss";
import styles from "./about.module.scss";

export default function SupportContent() {
  return (
    <div className={css.wrapper}>
      <div className={css.page_title}>সাপোর্ট</div>

      <div className={css.page_item}>
        <div className={styles.quran_content}>
            <p>Developed by - Deeni Info Tech</p>

            <p>Deeni Info Tech: A non-profitable software development organization to spread Dawah all over the world.
            </p>
          <p>
            Please mail us if you want to support. Any kind of support is highly
            appreciable.
          </p>
          <p>Email: deeniinfotech@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
