export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.8,
  },
};

export const imageReveal = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  transition: {
    duration: 1,
  },
};

export const imageFloat = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};