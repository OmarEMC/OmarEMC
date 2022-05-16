import 'focus-visible'

import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

import '@/styles/global.css'
import SEO from '../next-seo.config'

function handleExitComplete () {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function App ({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo {...SEO} />

      <ThemeProvider attribute="class" defaultTheme="light">
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete} initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App
