export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideInUp = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

export const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const serviceCardVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8,
    rotateY: -15,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
    },
  }),
};

export const cardHover2 = {
  scale: 1.02,
  y: -8,
  rotateX: 2,
  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const imageHover = {
  scale: 1.05,
  rotateZ: 1,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const buttonVariants2 = {
  rest: {
    scale: 1,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const textVariants = {
  rest: {
    x: 0,
    color: "inherit",
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const textReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const cardItem = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const navbarSlide = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const accordionCardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    rotateX: -10,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
    },
  }),
};

export const cardHover3 = {
  scale: 1.02,
  y: -2,
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const buttonHover2 = {
  backgroundColor: "#f3f4f6",
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const titleVariants = {
  rest: {
    x: 0,
    color: "#000000",
  },
  hover: {
    x: 5,
    color: "#2563eb",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const iconVariants = {
  rest: {
    rotate: 0,
    scale: 1,
    color: "#000000",
  },
  hover: {
    scale: 1.1,
    color: "#2563eb",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  closed: {
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const contentVariants = {
  closed: {
    height: 0,
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      opacity: { duration: 0.2 },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      opacity: { delay: 0.1, duration: 0.3 },
    },
  },
};

export const textSlideVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const containerVariants2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const cardHover = {
  scale: 1.02,
  y: -5,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const footerSlide = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
