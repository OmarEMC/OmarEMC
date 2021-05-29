import Link from 'next/link'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

interface FooterProps {
  prevPage?: string;
  nextPage?: string;
}

function Footer ({
  prevPage,
  nextPage
}: FooterProps) {
  return (
    <footer className="flex-initial flex border-t border-gray-400 border-opacity-80 p-4">
      <div className="flex-1">
        &copy; OmarEMC - {new Date().getFullYear()}
      </div>

      <div className="flex-initial flex items-center">
        {prevPage && (
          <Link href={prevPage} passHref>
            <a className="font-semibold text-gray-700 font-mono flex items-center">
              <FiArrowLeft className="inline-block w-4 h-4" />
              {prevPage}
            </a>
          </Link>
        )}
        {prevPage && nextPage && (
          <div className="text-gray-600 font-bold mx-2">-</div>
        )}
        {nextPage && (
          <Link href={nextPage} passHref>
            <a className="font-semibold text-gray-700 font-mono flex items-center">
              {nextPage}
              <FiArrowRight className="inline-block w-4 h-4" />
            </a>
          </Link>
        )}
      </div>
    </footer>
  )
}

export default Footer
