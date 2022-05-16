import { Variant } from 'framer-motion'

type AnimationVariants = {
  // eslint-disable-next-line no-unused-vars
  [key in 'initial' | 'animate' | 'exit']: Variant
}

const scaleY: AnimationVariants = {
  initial: {
    scaleY: 0
  },
  animate: {
    scaleY: 1
  },
  exit: {
    scaleY: 0
  }
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

const langAnimation: AnimationVariants = {
  initial: {
    width: 0
  },
  animate: {
    width: 'max-content'
  },
  exit: {}
}

export {
  fadeIn,
  scaleY,
  langAnimation
}
