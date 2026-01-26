import { server } from "../lib/config";
import { getChaptersInfo } from "../lib/fetch";
//import { useState } from 'react'
import SettingsContextProvider from "../contexts/SettingsContext";
import Meta from "../components/core/meta";
//import SearchModal from '../components/core/search-modal'
import HeaderWeb from "../components/web/header";
import HeaderMobile from "../components/mobile/header-content";
import FooterWeb from "../components/web/footer";
//import FooterMobile from '../components/mobile/footer-home'
import Sidenav from "../components/sidenav";
import AboutWriterContent from "../components/pages/about-writer";
import PinContextProvider from "../contexts/PinContext";
import BookmarkContextProvider from "../contexts/BookmarkContext";
import SidenavContextProvider from "../contexts/SidenavContext";

export default function AboutWriterPage({ chapters }) {
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
              title={`লেখক সম্পর্কে`}
              description={`লেখক সম্পর্কে`}
              url={`${server}/about-writer`}
              image={`${server}/img/s_logo.png`}
              type="website"
            />

            {/* <SearchModal
                open={searchModalOpen}
                searchModalController={searchModalController}
            /> */}

            <Sidenav chapters={chapters} />

            <HeaderWeb
              page="surah"
              // chapters={chapters}
              // isChapterPage={true}
              //searchModalController={searchModalController}
            />

            <HeaderMobile
              //searchModalController={searchModalController}
              title="লেখক সম্পর্কে"
            />

            <main id="viewport" className="viewport viewport_no_footer">
              <div className="content">
                <div className="content_wrapper">
                  <AboutWriterContent />
                </div>
              </div>
            </main>

            <FooterWeb />

            {/* <FooterMobile /> */}
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
