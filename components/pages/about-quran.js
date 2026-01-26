import Link from "next/link";
import Grid from "@mui/material/Grid";
import EastIcon from "../icons/East";
import css from "./style.module.scss";
import styles from "./about-quran.module.scss";

export default function AboutQuranContent() {
  return (
    <div className={css.wrapper}>
      <Grid container spacing={2}>
        <GridItem
          title="কুরআন কি?"
          text="কুরআন মানবজাতির জন্য উদ্দিষ্ট একটি ধর্মগ্রন্থ। এটি মানুষের জন্য একটি সম্পূর্ণ জীবনবিধান।"
          url="/what-is-quran"
        />
        <GridItem
          title="Kinh Quran có phải là lời nói của Thượng Đế không?"
          text="Không một điều giả dối nào có thể xâm nhập Nó (Qur'an) từ đằng trước hay đằng sau."
          url="/is-quran-god-word"
        />
        <GridItem
          title="কেন আমরা কুরআন পাঠ করব?"
          text="রমজান মাস হল সেই মাস যে মাসে কুরআন মানবজাতির জন্য পথপ্রদর্শক হিসাবে দেওয়া হয়েছে এবং স্পষ্ট প্রমাণ বহন করে..."
          url="/why-we-must-read-the-quran"
        />
      </Grid>
    </div>
  );
}

const GridItem = ({ title, text, url }) => {
  return (
    <Grid item xs={12} md={4}>
      <div className={styles.item}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href={url} legacyBehavior>
          <a>
            <span>আরো দেখুন</span>
            <span>
              <EastIcon />
            </span>
          </a>
        </Link>
      </div>
    </Grid>
  );
};
