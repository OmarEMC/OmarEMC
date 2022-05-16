import Trans from 'next-translate/Trans'

import Name from '@/components/Name'
import Photo from '@/components/Photo'
import Layout from '@/components/Layout'
import Divider from '@/components/Divider'
import Decoration from '@/components/Decoration'
import Parenthesis from '@/components/Parenthesis'
import LangsSection from '@/components/LangsSection'
import HomeDescription from '@/components/HomeDescription'

function Home () {
  return (
    <Layout
      nextPage="/projects"
      headerProps={{ showTitle: false }}
    >
      <div className="md:w-11/12 xl:w-10/12 mx-auto mb-4">
        <div className="grid md:grid-cols-12">
          <div className="lg:flex lg:items-center lg:justify-center md:col-span-4 md:py-8 pr-8">
            <div className="relative w-11/12 sm:w-6/12 md:w-full xl:w-10/12">
              <Photo />
              <Decoration.One className="absolute -bottom-4 -right-10 w-20 h-20 xs:w-28 xs:h-28" />
              <Decoration.Two className="absolute -top-12 -left-10 w-20 h-20 xs:w-28 xs:h-28 rotate-12" />
            </div>
          </div>

          <section className="md:col-span-8">
            <Name className="text-5xl sm:text-8xl" />

            <HomeDescription />

            <div className="text-lg sm:text-xl text-gray-800 font-medium dark:text-gray-300">
              {/* eslint-disable-next-line react/jsx-key */}
              <Trans i18nKey="home:description" components={[<Parenthesis />, <br />]} />
            </div>

            <LangsSection category="frontend" />
            <LangsSection category="backend" />
          </section>
        </div>

        <Divider />

        {/* Projects */}
      </div>
    </Layout>
  )
}

export default Home
