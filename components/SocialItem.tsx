import { ISocialItem } from '@/utils/static-data'
import { IconType } from 'react-icons/lib'

interface SocialItemProps extends ISocialItem {
  icon: IconType;
}

function SocialItem ({ icon: Icon, link, title }: SocialItemProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener" title={title} className="group rounded-md transition-colors duration-300 hover:bg-gray-300">
      <Icon className="w-7 h-7 text-primary-500 group-hover:text-primary-900" />
    </a>
  )
}

export default SocialItem
