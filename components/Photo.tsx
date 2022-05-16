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
        alt="Omar Moreno photo"
        className="rounded-lg h-40 w-40"
      />
    </motion.div>
  )
}

export default Photo
