import Image from 'next/image'
import { motion } from 'framer-motion'

import photo from '../public/images/photo.jpg'

function Photo () {
  return (
    <motion.div
      className="w-full h-full"
      layoutId="profile-photo"
    >
      <Image
        src={photo}
        draggable={false}
        placeholder="blur"
        className="rounded-lg"
        alt="Omar Moreno photo"
      />
    </motion.div>
  )
}

export default Photo
