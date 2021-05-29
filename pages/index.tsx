import Link from 'next/link'

import Layout from '@/components/Layout'
import { fadeIn } from '@/utils/animations'

function Home () {
  return (
    <Layout nextPage="/projects" variants={fadeIn}>
      Contenido

      <Link href="/projects">
        <a className="block">
          Proyectos
        </a>
      </Link>
    </Layout>
  )
}

export default Home
