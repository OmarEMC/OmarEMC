import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import Layout from '@/components/Layout'

function NotFound () {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className="h-full w-full flex justify-center items-center">
        <section>
          <div className="text-9xl font-rubik">
            <span className="inline-block text-primary-400 rotate-12">4</span>
            <span className="inline-block text-primary-500 -rotate-6">0</span>
            <span className="inline-block text-primary-400 -rotate-12">4</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="mb-2 text-2xl font-francis text-center text-gray-700">{t('404:title')}</p>
            <Link href="/" passHref>
              <a className="w-max px-6 py-2 font-francis rounded-md text-white bg-primary-400 hover:bg-primary-500">
                {t('404:btn-text')}
              </a>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NotFound
