import React from "react";
import CountUp from "react-countup";
// Imports the react-countup library to create animated number counters.
// This library is used to create smooth and visually appealing number animations.

const NumberCounter = () => {
  return (
    // return - Specifies what the component renders.
    //A container element to structure the inner content.
    <div className="bg-secondary text-white py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* container: Centers the content and applies a max-width (often defined by the CSS framework).
        grid: Uses a CSS Grid layout to arrange child elements in rows and columns.
        grid-cols-2: Sets two equal-width columns for small screens.
        md:grid-cols-4: Changes to four columns on medium-sized screens and above (responsive design).
        gap-8: Adds spacing of 8 units between grid items. */}
        <div className="flex flex-col items-center justify-center">
                    {/* flex: Enables a flexbox layout for the child elements.
            flex-col: Arranges child elements vertically (column layout).
            items-center: Centers child elements horizontally within the container.
            justify-center: Centers child elements vertically within the container. */}
          <p className="text-3xl font-semibold">
          {/* text-3xl: Sets the font size to "extra large" (3XL). */}


{           /* Integrates the CountUp component to animate numbers. */}
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}//Triggers the animation only when the element scrolls into view.
              scrollSpyOnce={true}//Ensures the animation runs only once.
            />
          </p>
          <p>Expert tutors</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={20000}
              separator=","//Adds a comma as a thousands separator (e.g., 20,000).
              suffix="+"// Appends a "+" sign after the number (e.g., 20,000+).
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Hours content</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={298}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Subject and courses</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={72878}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Active students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
