import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

//image: URL of the banner image.
//reverse: A boolean to control layout direction (e.g., reversing the order of image and text).

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <div className="bg-[#f9f9f9] pb-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">

        {/* space-y-6: Adds vertical spacing (1.5rem) between child elements in single-column mode.
        md:space-y-0: Removes vertical spacing in two-column mode. */}

          {/* banner Image section */}
          <div
            className={`flex justify-start items-center ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
                            {/* flex: Applies Flexbox to align items.
                justify-start: Aligns content to the start of the container (left-aligned).
                items-center: Vertically centers content within the container.
                reverse && "md:order-last md:justify-end":
                If reverse is true, the image appears last (md:order-last) and is aligned to the end (md:justify-end) in medium or larger screens. */}
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={image}
              alt=""
              className="w-[400px] h-full object-cover"
            />

            {/* initial: Animation starting state (opacity is 0, and scale is reduced to 0.5).
            whileInView: Final state when the element enters the viewport (opacity 1, scale 1).
            transition:
            Uses a spring animation.
            stiffness: 100 controls the spring's rigidity.
            delay: 0.2 introduces a slight delay.
            src={image}: The image prop is passed as the source URL for the image.
            className="w-[400px] h-full object-cover":
            w-[400px]: Width is fixed at 400px.
            h-full: Height takes up the container's full height.
            object-cover: Ensures the image scales and crops proportionally to fill its container */}

          </div>
          {/* Banner text section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}// Becomes "visible" when scrolled into view.
              className="text-sm text-orange-600 font-semibold capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-xl lg:text-2xl font-semibold capitalize "
            >
              {title}
            </motion.p>
            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-slate-500"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(1.1)}//The animation has a longer delay.
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn !mt-5">Get Started</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

//The component receives props to dynamically render a banner section.
//The reverse prop controls the image's position relative to the text.