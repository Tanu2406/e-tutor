import React from "react";
import { motion, AnimatePresence } from "framer-motion";//A framer-motion utility used to animate components when they are added or removed from the DOM (e.g., fade-in and fade-out).

const ResponsiveMenu = ({ isOpen }) => {//A functional component that accepts a prop called isOpen.
  //isOpen: A boolean that determines whether the mobile menu should be displayed or hidden.
  
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;

// AnimatePresence:
// Ensures smooth animations for components entering or leaving the DOM.
// Only animates child elements wrapped inside it.
// mode="wait": Ensures the exit animation is completed before the next animation starts (useful when toggling between states).
// {isOpen && ...:

// Renders the menu only if isOpen is true.
// <motion.div>:

// Wraps the menu with animations for entering and exiting the DOM.
// initial={{ opacity: 0, y: -100 }}: When the menu first appears, it starts invisible and positioned 100px above its final position.
// animate={{ opacity: 1, y: 0 }}: Animates to full visibility and slides down to its intended position.
// exit={{ opacity: 0, y: -100 }}: Animates the menu back up and fades it out when removed from the DOM.
// transition={{ duration: 0.3 }}: Specifies that the animation will take 0.3 seconds.
// CSS Classes:

// absolute: Positions the menu relative to its parent.
// top-20 left-0: Places the menu slightly below the top of the screen (top-20) and aligned to the left (left-0).
// w-full h-screen: Makes the menu take up the full width and height of the screen.
// z-20: Sets a high z-index to ensure the menu is on top of other content.
// lg:hidden: Hides this menu on larger screens (lg breakpoint).}

// text-xl: Sets the text size to extra-large.
// font-semibold: Makes the text semi-bold.
// uppercase: Converts all text to uppercase.
// bg-primary: Sets the background color to a custom primary color (defined in CSS or Tailwind theme).
// text-black: Sets the text color to black.
// py-10: Adds vertical padding of 10 units.
// m-6: Adds a margin of 6 units around the container.
// rounded-3xl: Rounds the corners with an extra-large radius for a smooth, modern look.

// <ul>:
// flex flex-col: Uses Flexbox to stack the menu items vertically.
// justify-center items-center: Centers the items both horizontally and vertically within the container.
// gap-10: Adds spacing of 10 units between each menu item.
// <li>: Represents each menu option:
// Menu items like "Home", "About", "Service", and "Contact" are rendered as static text.

// {...}: Closes the conditional rendering block for isOpen.
// export default ResponsiveMenu;:
// Exports the ResponsiveMenu component so it can be imported into other files, like the Navbar.

// Animation with Framer Motion:

// The menu smoothly slides in and out using animations (motion.div).
// Controlled by the isOpen prop.
// Responsive Design:

// The menu is hidden on larger screens (lg:hidden) and only displayed on smaller screens.
// Dynamic Visibility:

// Menu visibility is toggled by the parent component (Navbar) using the isOpen state.
// Modern Styling:

// Tailwind CSS provides clean, modern styles for spacing, alignment, and colors.
