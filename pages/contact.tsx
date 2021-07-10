import { FiTwitter } from 'react-icons/fi'
import { RiDiscordLine } from 'react-icons/ri'
import useTranslation from 'next-translate/useTranslation'

import Photo from '@/components/Photo'
import Title from '@/components/Title'
import Layout from '@/components/Layout'
import Divider from '@/components/Divider'
import SocialItem from '@/components/SocialItem'
import Parenthesis from '@/components/Parenthesis'
import { NextSeo } from 'next-seo'

function Contact () {
  const { t } = useTranslation()

  return (
    <Layout
      prevPage="/projects"
    >
      <NextSeo
        title={t('contact:title')}
        openGraph={{ title: t('contact:title') }}
      />

      <div className="h-full w-11/12 mx-auto flex items-center justify-center">
        <div className="grid md:grid-cols-12">
          <section className="p-6 xs:hidden md:block md:col-span-4 lg:p-16">
            <Photo />
          </section>
          <section className="md:col-span-8 md:py-12">
            <div className="selection:bg-blue-400">
              <Title className="text-3xl sm:text-5xl">{t('contact:twitter.title')}</Title>
              <p className="py-2 text-lg font-medium text-gray-700 sm:text-xl">{t('contact:twitter.description')}</p>
              <SocialItem user="OmarEMC_" title="Twitter" icon={FiTwitter} link="https://twitter.com/OmarEMC_" />
            </div>

            <Divider />

            <div className="selection:bg-indigo-400">
              <Title className="text-3xl sm:text-5xl">{t('contact:discord.title')}</Title>
              <p className="py-2 text-lg font-medium text-gray-700 sm:text-xl">{t('contact:discord.description')}</p>
              <div className="flex flex-col justify-center items-center gap-2 sm:flex-row sm:justify-start">
                <SocialItem user="OmarEMC#8320" title="Discord" icon={RiDiscordLine} link="#" />
                <Parenthesis>(ID: 635222945433649163)</Parenthesis>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
