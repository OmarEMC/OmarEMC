import { Variant } from 'framer-motion'

type AnimationVariants = {
  // eslint-disable-next-line no-unused-vars
  [key in 'initial' | 'animate' | 'exit']: Variant
}

const fadeIn: AnimationVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

export {
  fadeIn
}
