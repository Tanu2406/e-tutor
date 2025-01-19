import React from "react";// Importing React, the core library for building UI components.
import { GrYoga } from "react-icons/gr";//Importing specific icons from the react-icons package.
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";//Importing Framer Motion to add animations.
import { SlideLeft } from "../../utility/animation";//Importing an animation configuration (not provided here) from the utility/animation module.

const WhyChooseData = [
    //An array of objects
  {
    id: 1,
    title: "One-on-one Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,//Animation delay for each card.
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quick as possible for you",
    link: "/",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard equipped with audio and video chat fetures.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and per hour.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]"> 
    {/* light grayish-blue. */}
      <div className="container py-24">
      {/* py-24: Adds vertical padding of 96px (24 * 4px). */}
      {/* mx-auto: Centers the div horizontally
      mb-5: Adds a bottom margin of 20px (5 * 4px).
      text-3xl: Sets font size to 1.875rem (30px) */}
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of online tutoring services with us
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}// Animation configuration defined in SlideLeft.
                initial="hidden"
                whileInView={"visible"}//Triggers animation when the element enters the viewport.
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"//rounded-xl: Applies extra-large rounded corners.   Adds a subtle box shadow.
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"//rounded-lg: Medium rounded corners.
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

// map function is used to dynamically render a list of cards based on the data in the WhyChooseData array. 
//The map function is a JavaScript method used to iterate over an array, transform each element, and return a new array containing the transformed elements.
//ach object (item) in the array, it creates a new motion.div element.

// Dynamic Data Binding:

// The item.icon, item.title, and item.desc dynamically populate the content of each card based on the properties in the WhyChooseData array.
// Animation Customization:

// The SlideLeft(item.delay) function uses the item.delay value to customize the animation delay for each card.
// Dynamic Styling:

// The style={{ backgroundColor: item.bgColor }} line sets the background color of the icon section dynamically, based on the bgColor property of the current item

//Dynamic Rendering: Instead of hardcoding each card, map allows rendering based on the data in WhyChooseData.