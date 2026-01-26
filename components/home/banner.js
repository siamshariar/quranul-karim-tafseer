import Link from "next/link";
import Image from "next/image";
import Container from "../core/container";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <Container>
          {/*<div className={styles.calligraphy}>*/}
          {/*  <Image src="/img/quran.webp" alt="" width={300} height={170} />*/}
          {/*</div>*/}

          <div className={styles.title}>
            <h1>কুরআনুল কারীম</h1>
            <p>বাংলা অনুবাদ ও সংক্ষিপ্ত তাফসীর</p>
          </div>
        </Container>
      </div>

      {/*<div className={styles.banner_mobile}>*/}
      {/*  <Container>*/}
      {/*    <Link href="/about-quran">*/}
      {/*      <a className={styles.banner_link}>কুরআন সম্পর্কে আরও জানুন</a>*/}
      {/*    </Link>*/}
      {/*  </Container>*/}
      {/*</div>*/}
    </>
  );
}
