import React from "react";//This imports the React library to build the component and use hooks like useState
import { NavbarMenu } from "../../mockData/data.js";// Imports a list of menu data (like menu titles and links) from a mock data file.
import { MdComputer, MdMenu } from "react-icons/md";// These are React icons from the react-icons library, specifically from the "Material Design" icon set. MdComputer represents a computer icon, and MdMenu represents a menu (hamburger) icon.
import { motion } from "framer-motion";//Imported from framer-motion, this is used to add animation effects to the component (e.g., fade-in on load).
import ResponsiveMenu from "../Navbar/ResponsiveMenu.jsx" // A custom component imported from another file. Likely renders the menu for mobile devices.

const Navbar = () => {//Defines the functional component.
  const [isOpen, setIsOpen] = React.useState(false);//Initializes a state variable, isOpen, with a default value of false.
  //isOpen is a boolean that determines if the mobile menu is open or not.
  //setIsOpen is a function to update the isOpen state.
  return (
    <>
      <motion.div 
      // A wrapper from framer-motion to add animations
        initial={{ opacity: 0 }}//Sets the starting opacity of the component to 0 (invisible).
        animate={{ opacity: 1 }}//Animates the opacity to 1 (fully visible) after rendering.
        transition={{ duration: 0.5, delay: 0.5 }}//Specifies the animation will last 0.5 seconds and start after a delay of 0.5 seconds.
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
          {/* text-2xl: Large text size.
          flex: Applies Flexbox for layout.
          items-center: Vertically aligns items in the center.
          gap-2: Adds space between child elements.
          font-bold: Makes the text bold. */}
            <MdComputer className="text-3xl text-secondary" />
             {/* Renders a computer icon with */}
             {/* text-3xl: Larger size for the icon.
            text-secondary: Adds a color class (secondary is likely defined in the CSS or Tailwind theme). */}
            <p>E-Tutor</p>
            {/* Displays the website name, "E-Tutor." */}
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            {/* hidden lg:block: Hides this menu on smaller screens (lg breakpoint). */}
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {// Loops through the array of menu items imported from data.js
                return (
                  // Each menu item renders a <li> element.
                  //key={item.id}: Ensures unique keys for React's virtual DOM optimization.
                  <li key={item.id}>
                    <a
                    //Anchor Links
                      href={item.link}// Sets the link destination.
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                        // text-gray-600: Gray text color.
                        // text-sm xl:text-base: Text size varies for smaller and larger screens.
                        // py-1 px-2 xl:px-3: Padding for spacing.
                        // hover:text-secondary: Changes text color to secondary on hover.
                        // transition-all duration-300: Smooth hover animation lasting 300ms.
                        // font-semibold: Semi-bold text.
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            {/* Hidden on small screens (hidden lg:block). */}
            <button className="font-semibold">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 ">
              Register
            </button>
          </div>
             {/* "Sign in" is a basic text button with bold styling (font-semibold).
              "Register" is styled as a prominent button:
              text-white: White text.
              bg-secondary: Secondary background color.
              rounded-full: Fully rounded edges.
              px-6 py-2: Padding for size. */}

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* lg:hidden: Shows only on smaller screens (lg breakpoint).
          onClick: Toggles the state of isOpen between true and false. */}
            <MdMenu className="text-4xl" />
           {/* Renders a hamburger menu icon.
            text-4xl: Sets its size. */}
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
           {/* Renders the ResponsiveMenu component (likely a mobile menu).
          isOpen Prop: Passes the isOpen state to the ResponsiveMenu component to control its visibility. */}
    </>
  );
};

export default Navbar;
//Exports the Navbar component so it can be imported and used in other parts of the application.

// Responsive Design:

// Desktop navigation (lg:block).
// Mobile hamburger menu (lg:hidden).
// Dynamic Menu Rendering:

// Uses NavbarMenu.map to loop through the menu items dynamically.
// Framer-Motion Animation:

// Smooth fade-in animation on load.
// State Management:

// Toggles isOpen to control mobile menu visibility.
