import React from "react"; //React: The React library is imported to create components
import HeroImg from "../../assets/hero.png";//HeroImg: An image file (hero.png) is imported for use in the hero section.
import { FaPlay } from "react-icons/fa";//FaPlay: A play icon from the react-icons library is imported to be used as a part of the UI.

import { motion } from "framer-motion";//motion: A component from framer-motion, a library for creating animations in React
import { SlideRight } from "../../utility/animation";//SlideRight: A custom animation function imported from the utility folder, used to handle the sliding animations.


const Hero = () => {
  //Hero: This is a functional React component that defines the hero section of the page.
//return: The JSX structure of the component is returned here.
//Fragment (<>): Used to wrap multiple JSX elements without adding an extra DOM node.

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* container: A utility class for responsive layout with fixed max-width at different screen sizes.
            grid: Activates CSS grid layout.
            grid-cols-1: Specifies a single column for the grid (on small screens).
            md:grid-cols-2: Sets two columns for medium screens (md = 768px and above).
            min-h-[650px]: Sets a minimum height of 650px for the container.
            relative: Positions the container relative to its normal position, useful for positioning child elements absolutely. */ }
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">

                {/* flex: Applies a flexbox layout.
        flex-col: Aligns items vertically.
        justify-center: Vertically centers the content inside the container.
        py-14: Adds 56px padding on the top and bottom (py = padding-y).
        md:pr-16: Adds 64px padding on the right for medium screens and larger.
        xl:pr-40: Adds 160px padding on the right for extra-large screens.
        md:py-0: Removes vertical padding on medium screens and larger. */}

          <div className="text-center md:text-left space-y-6">

                  {/* text-center: Centers the text horizontally on small screens.
        md:text-left: Aligns the text to the left on medium screens and larger.
        space-y-6: Adds vertical spacing of 24px between child elements. */}

            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 uppercase font-semibold"
            >
              100% Satisfaction Guarantee
            </motion.p>

                      {/* motion.p: A <p> element enhanced with framer-motion for animation.
          variants={SlideRight(0.4)}: Applies the SlideRight animation with a delay of 0.4 seconds.
          initial="hidden": Sets the initial animation state to hidden.
          animate="visible": Animates the element to a visible state.
          text-orange-600: Sets the text color to a dark orange (600 = shade).
          uppercase: Transforms the text to uppercase.
          font-semibold: Sets the font weight to semibold. */}

            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl !leading-tight"
            >
              Find Your Perfect <span className="text-primary">Tutor</span>
            </motion.h1>

                      {/* text-5xl: Sets the font size to a large value (3rem).
          lg:text-6xl: Increases font size on large screens.
          font-semibold: Applies a semibold font weight.
          !leading-tight: Overrides default line-height and applies tight line spacing.
          text-primary: Uses a custom-defined primary color (defined in the Tailwind configuration). */}

            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              We help you find perfect tutor for 1-on-1 lessons. It is
              completely free and private
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >

            {/* gap-8: Adds 32px spacing between child elements.
            justify-center: Centers buttons on small screens.
            md:justify-start: Aligns buttons to the left on medium screens.
            !mt-8: Adds top margin of 32px with ! overriding other styles.
            items-center: Vertically centers the buttons. */}

              <button className="primary-btn">Get Started</button> 
               {/* primary-btn: Likely a custom Tailwind class for a primary button (defined in the project's CSS). */}
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See how it works
              </button>

                          {/* flex: Applies flexbox for alignment.
            justify-end: Aligns content to the end horizontally.
            items-center: Vertically centers the content.
            w-10 h-10: Sets width and height to 40px.
            bg-secondary/15: Applies a semi-transparent secondary color as the background.
            rounded-full: Makes the element circular. */}

            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />

          {/* justify-center: Centers the image horizontally.
          items-center: Centers the image vertically.
          w-[350px]: Sets a custom width of 350px for small screens.
          md:w-[550px]: Width increases to 550px on medium screens.
          xl:w-[700px]: Width increases to 700px on extra-large screens. */}

        </div>
      </div>
    </>
  );
};

export default Hero;
// This makes the Hero component available for use in other parts of the app.

