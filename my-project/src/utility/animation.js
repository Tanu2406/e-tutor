export const SlideUp = (delay) => {
  // delay, which represents the time in seconds before the animation starts.
    return {
      //hidden represents the starting state of the animation.
      hidden: {
        opacity: 0,//The element starts fully transparent.
        y: 100,//: The element starts 100 pixels below its final position.
      },
      //visible represents the ending state.
      visible: {
        opacity: 1,//The element becomes fully visible.
        y: 0,//The element moves to its final vertical position.
        //transition specifies how the animation progresses
        transition: {
          duration: 1,// The animation lasts 1 second.
          delay: delay,//he animation waits for delay seconds before starting
        },
      },
    };
  };
  export const SlideLeft = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: 100,// The element starts 100 pixels to the right of its final position.
      },
      visible: {
        opacity: 1,
        x: 0,//The element moves to its final horizontal position.
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };
  export const SlideRight = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: -100,//The element starts 100 pixels to the left of its final position.
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };