import Image from 'next/image'
import { motion } from 'framer-motion'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import Title from '@/components/Title'
import Layout from '@/components/Layout'
import Divider from '@/components/Divider'
import LangCard from '@/components/LangCard'
import { languages } from '@/utils/static-data'
import Decoration from '@/components/Decoration'
import Parenthesis from '@/components/Parenthesis'
import LangsSection from '@/components/LangsSection'
import HomeDescription from '@/components/HomeDescription'

import photo from '../public/images/photo.jpg'

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
            <div className="relative">
              <Image
                src={photo}
                draggable={false}
                placeholder="blur"
                className="rounded-lg"
                alt="Omar Moreno photo"
              />
              <Decoration.One className="absolute -bottom-4 -right-10 w-28 h-28" />
              <Decoration.Two className="absolute -top-12 -left-10 w-28 h-28 rotate-12" />
            </div>
          </div>

          <section className="md:col-span-8">
            <motion.div className="text-5xl sm:text-8xl text-gray-800 font-bold" layoutId="omaremc-title">
              Omar
              <span className="text-primary-700">EMC</span>
            </motion.div>

            <HomeDescription />

            <div className="text-lg sm:text-xl text-gray-800 font-medium">
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
          <p className="mt-2 text-lg sm:text-2xl text-gray-800 font-medium">{t('home:my-main.description')}</p>

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
