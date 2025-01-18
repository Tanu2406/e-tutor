import React from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {// A functional component that displays a banner with a message and a close button.
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative"
      >
        Are you a university or school student for an online tutoring
        partnership?
        <a href="#" className="text-secondary ml-2">
          Talk to us
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;

// isOpen: A state variable that determines whether the banner is visible or not.
// setIsOpen: A function to update the value of isOpen.
// React.useState(true): Initializes the isOpen state to true, meaning the banner is visible by default.

// NavbarBanner: A functional component that displays a banner with a message and a close button.

// isOpen: A state variable that determines whether the banner is visible or not.
// setIsOpen: A function to update the value of isOpen.
// React.useState(true): Initializes the isOpen state to true, meaning the banner is visible by default.

// isOpen && ...:

// The NavbarBanner only renders if isOpen is true. Once the state changes to false, the banner will no longer be displayed.
// <motion.div>:

// Wraps the banner with framer-motion animations.
// initial={{ opacity: 0 }}: When the banner first appears, it starts fully transparent.
// animate={{ opacity: 1 }}: Animates to full opacity (visible).
// transition={{ duration: 0.5, delay: 0.7 }}:
// Animation duration is 0.5 seconds.
// A delay of 0.7 seconds is applied before the animation starts.
// CSS Classes:

// bg-primary: Sets the background color to the primary color (custom color defined in Tailwind or CSS).
// text-sm: Sets the font size to small.
// text-center: Centers the text horizontally.
// font-semibold: Makes the text slightly bold.
// p-1: Adds padding of 1 unit to the banner.
// hidden lg:block: Hides the banner on smaller screens and only displays it on large screens (lg breakpoint and above).
// relative: Positions the container relative, allowing the child element (close button) to be positioned absolutely within it.

// Banner Message:

// Displays a message to the user encouraging them to explore online tutoring partnerships.
// <a> Tag:

// Adds a clickable link (placeholder with href="#") to navigate to a relevant page (e.g., "Talk to us").
// CSS Classes:
// text-secondary: Sets the link color to a secondary color.
// ml-2: Adds left margin of 2 units for spacing between the message and the link.

{/* <div>:

Represents the "X" close button to hide the banner.
CSS Classes:

absolute: Positions the close button relative to the parent container (relative set earlier).
top-1/2: Vertically centers the button relative to the top of the parent.
right-10: Positions the button 10 units from the right edge of the container.
cursor-pointer: Changes the cursor to a pointer when hovering over the button.
-translate-y-1/2: Centers the button by translating it upward by half its height.
onClick={() => setIsOpen(false)}:

This is the click handler for the "X" button.
When the user clicks the button, it sets isOpen to false, which hides the banner by preventing it from rendering. */}

// </motion.div>: Closes the animated banner wrapper.
// export default NavbarBanner;:
// Exports the NavbarBanner component so it can be imported and used in other files.

// Animations:

// The banner smoothly fades in (opacity: 0 → 1) with a slight delay (0.7s), creating a professional look.
// Responsive Design:

// The banner is hidden on small screens (hidden lg:block) and only visible on larger screens.
// Dynamic Visibility:

// The banner's visibility is controlled by the isOpen state. Clicking the close button hides the banner.
// Framer Motion Integration:

// Framer Motion is used to handle animations for entering and exiting the banner.