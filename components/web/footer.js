import Link from "next/link";
import Image from "next/image";
import { Grid } from "@mui/material";
import Container from "../core/container";
import FacebookIcon from "../icons/Facebook";
import TwitterIcon from "../icons/Twitter";
import LinkedinIcon from "../icons/Linkedin";
import styles from "./footer.module.scss";

export default function FooterWeb() {
  return (
    <div className={styles.footer}>
      <Container>
        {/*<div className={styles.top}>*/}
        {/*  <Grid container spacing={4}>*/}
        {/*    <Grid item xs={12} md={4} lg={5}>*/}
        {/*      <p className={styles.about}>কুরআনুল কারীম</p>*/}
        {/*      <p className={styles.about}>*/}
        {/*        কুরআন মানবজাতির জন্য উদ্দিষ্ট একটি ধর্মগ্রন্থ। এটি মানুষের জন্য*/}
        {/*        একটি সম্পূর্ণ জীবনবিধান।*/}
        {/*      </p>*/}
        {/*      <div className={styles.social}>*/}
        {/*        <a href="#" target="_blank">*/}
        {/*          <FacebookIcon />*/}
        {/*        </a>*/}
        {/*        <a href="#" target="_blank">*/}
        {/*          <TwitterIcon />*/}
        {/*        </a>*/}
        {/*        <a href="#" target="_blank">*/}
        {/*          <LinkedinIcon />*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={4} lg={4}>*/}
        {/*      <h2 className={styles.title}>ডাউনলোড অ্যাপ</h2>*/}
        {/*      <div className={styles.app}>*/}
        {/*        <a href="#" target="_blank">*/}
        {/*          <Image*/}
        {/*            src="/img/play_store.png"*/}
        {/*            alt=""*/}
        {/*            width={130}*/}
        {/*            height={44}*/}
        {/*          />*/}
        {/*        </a>*/}
        {/*        <a href="#" target="_blank">*/}
        {/*          <Image*/}
        {/*            src="/img/app_store.webp"*/}
        {/*            alt=""*/}
        {/*            width={130}*/}
        {/*            height={44}*/}
        {/*          />*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={4} lg={3}>*/}
        {/*      <h2 className={styles.title}>প্রয়োজনীয় লিঙ্ক</h2>*/}
        {/*      <ul className={styles.links}>*/}
        {/*        <li>*/}
        {/*          <Link href="/names-of-allah">*/}
        {/*            <a>আল্লাহর নামসমূহ</a>*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <Link href="/learn">*/}
        {/*            <a>কুরআন শিখুন</a>*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <Link href="/rating">*/}
        {/*            <a>রেটিং এবং পর্যালোচনা</a>*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <Link href="/thanks">*/}
        {/*            <a>কৃতজ্ঞতা</a>*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</div>*/}

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            <span>&copy; {new Date().getFullYear()} </span>
            <Link href="/about" legacyBehavior>
              <a>Quranul Karim</a>
            </Link>
            <span> All Rights Reserved</span>
          </p>

          <ul className={styles.menu}>
            <li>
              <Link href="/about" legacyBehavior>
                <a>তাফসীর সম্পর্কে</a>
              </Link>
            </li>
            <li>
              <Link href="/about-writer" legacyBehavior>
                <a>লেখক সম্পর্কে</a>
              </Link>
            </li>
            <li>
              <Link href="/support" legacyBehavior>
                <a>সাপোর্ট</a>
              </Link>
            </li>
          </ul>

          <p className={styles.credit}>
            Powered By -{" "}
            <a href="http://deeniinfotech.com/" target="_blank">
              Deeni Info Tech
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
