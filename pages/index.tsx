import { motion } from 'framer-motion'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import Layout from '@/components/Layout'
import { fadeIn } from '@/utils/animations'
import Parenthesis from '@/components/Parenthesis'

function Home () {
  const { t, lang } = useTranslation('common')

  return (
    <Layout
      nextPage="/projects"
      variants={fadeIn}
      headerProps={{ showTitle: false }}
    >
      <div className="w-11/12 h-screen mx-auto">
        <motion.div className="text-5xl sm:text-8xl text-gray-800 font-bold" layoutId="omaremc-title">
          Omar
          <span className="text-purple-700">EMC</span>
        </motion.div>

        <div className="font-semibold text-xl sm:text-2xl">
          {lang === 'es' && (
            <span className="inline-block first-letter:uppercase">
              {t('developer')}
            </span>
          )}
          <h2 className="inline text-purple-400 text-2xl sm:text-4xl">Frontend</h2>
          {t('and')}
          <h2 className="inline text-purple-500 text-2xl sm:text-4xl">Backend</h2>
          {lang === 'en' && t('developer')}.
        </div>

        <div className="text-lg sm:text-xl text-gray-800 font-medium mt-2">
          <Trans
            i18nKey="home:description"
            // eslint-disable-next-line react/jsx-key
            components={[<Parenthesis />]}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
