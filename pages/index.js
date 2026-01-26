import { server } from "../lib/config";
import { getChaptersInfo } from "../lib/fetch";
//import { useState } from 'react'
import SettingsContextProvider from "../contexts/SettingsContext";

import Meta from "../components/core/meta";
//import Viewport from '../components/core/viewport'
//import SearchModal from '../components/core/search-modal'
import HeaderWeb from "../components/web/header";
import HeaderMobile from "../components/mobile/header-home";
import FooterWeb from "../components/web/footer";
import FooterMobile from "../components/mobile/footer-home";
import Sidenav from "../components/sidenav";
import Banner from "../components/home/banner";
import HomeSearch from "../components/home/search";
import ChapterList from "../components/home/chapter-list";
import PinContextProvider from "../contexts/PinContext";
import BookmarkContextProvider from "../contexts/BookmarkContext";
import SidenavContextProvider from "../contexts/SidenavContext";

// init()

export default function Home({ chapters }) {
  // const [searchModalOpen, updateSearchModalOpen] = useState(false)

  // const searchModalController = open => {
  //     updateSearchModalOpen(open)
  // }

  return (
    <SettingsContextProvider>
      <PinContextProvider>
        <BookmarkContextProvider>
          <SidenavContextProvider>
            <Meta
              title=""
              description="Quran application in Bangla"
              url={server}
              image={`${server}/img/s_logo.png`}
              type="website"
            />

            {/* <SearchModal
                open={searchModalOpen}
                searchModalController={searchModalController}
            /> */}

            <Sidenav chapters={chapters} />

            <HeaderWeb
              page="home"
              // chapters={chapters}
              // isChapterPage={false}
              // searchModalController={searchModalController}
            />

            <HeaderMobile
              chapters={chapters}
              //searchModalController={searchModalController}
            />

            <main id="viewport" className="viewport">
              <Banner />
              {/* <HomeSearch /> */}
              <ChapterList chapters={chapters} />
            </main>

            <FooterWeb />

            <FooterMobile chapters={chapters} />
          </SidenavContextProvider>
        </BookmarkContextProvider>
      </PinContextProvider>
    </SettingsContextProvider>
  );
}

export async function getStaticProps(context) {
  const chapters = await getChaptersInfo();

  if (!chapters) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return {
    props: { chapters },
  };
}
