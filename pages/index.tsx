import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import Name from '@/components/Name'
import Photo from '@/components/Photo'
import Title from '@/components/Title'
import Layout from '@/components/Layout'
import Divider from '@/components/Divider'
import LangCard from '@/components/LangCard'
import { languages } from '@/utils/static-data'
import Decoration from '@/components/Decoration'
import Parenthesis from '@/components/Parenthesis'
import LangsSection from '@/components/LangsSection'
import HomeDescription from '@/components/HomeDescription'

function Home () {
  const { t } = useTranslation('common')

  return (
    <Layout
      nextPage="/projects"
      headerProps={{ showTitle: false }}
    >
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-12">
          <div className="md:block md:col-span-4 md:py-8 pr-8">
            <div className="relative w-11/12 sm:w-6/12 md:w-full 2xl:w-7/12">
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

        <section className="mt-2">
          <Title id="my-main" className="text-6xl md:text-7xl">{t('home:my-main.title')}</Title>
          <p className="mt-2 text-lg sm:text-2xl text-gray-800 font-medium dark:text-gray-300">{t('home:my-main.description')}</p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {['Typescript', 'ReactJS', 'NextJS', 'TailwindCSS', 'Sass'].map((l) => (
              <LangCard lang={languages.find((lang) => lang.name === l)} className="md:p-0" key={l} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
