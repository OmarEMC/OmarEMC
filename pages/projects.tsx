import Link from 'next/link'

import Layout from '@/components/Layout'

function Projects () {
  return (
    <Layout prevPage="/" nextPage="/contact">
      Proyectos

      <Link href="/">
        <a className="block">
          Inicio
        </a>
      </Link>
    </Layout>
  )
}

export default Projects
