import css from "./style.module.scss";
import styles from "./about.module.scss";

export default function GratefulContent() {
  return (
    <div className={css.wrapper}>
      <div className={css.page_title}>কৃতজ্ঞতা</div>

      <div className={css.page_item}>
        <div className={styles.quran_content}>
          <p>
            {/* By the grace of almighty Allah, extremely thankful to Quran
            Encyclopedia for providing authentic data to spread the message of
            Allah. */}
            সর্বশক্তিমান আল্লাহর রহমতে, আল্লাহর বাণী ছড়িয়ে দেওয়ার জন্য
            প্রামাণিক তথ্য সরবরাহ করার জন্য কুরআন বিশ্বকোষের প্রতি অত্যন্ত
            কৃতজ্ঞ।
          </p>
        </div>
      </div>
    </div>
  );
}
