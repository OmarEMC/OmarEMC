import { ISocialItem } from '@/utils/static-data'
import { IconType } from 'react-icons/lib'

interface SocialItemProps extends ISocialItem {
  icon: IconType;
  user?: string;
}

function SocialItem ({ icon: Icon, user, link, title }: SocialItemProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener" title={title} className="group inline-flex items-center gap-1 rounded-md transition-colors duration-300 hover:bg-gray-300">
      <Icon className="w-7 h-7 text-primary-500 group-hover:text-primary-900" />
      {user && (
        <span className="text-lg font-bold text-primary-600 group-hover:text-primary-900">
          {user}
        </span>
      )}
    </a>
  )
}

export default SocialItem
