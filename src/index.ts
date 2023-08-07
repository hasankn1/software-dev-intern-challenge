/***************************************************************************************
                   !!  DO NOT EDIT THIS TEMPLATE   !!
          !!  CLICK THE FORK OPTION ON THE TOP RIGHT TO CONTINUE !!
/***************************************************************************/

/*************  Frames provided to test out your algorithm   ***************/

import frames1 from "./frames/frames1.json";
import frames2 from "./frames/frames2.json";
import frames3 from "./frames/frames3.json";
import frames4 from "./frames/frames4.json";
import frames5 from "./frames/frames5.json";
import frames6 from "./frames/frames6.json";
import frames7 from "./frames/frames7.json";

/***************************************************************************/

interface Frame {
  // center
  x1: number;
  y1: number;
  // top
  x2: number;
  y2: number;
  // bottom
  x3: number;
  y3: number;
}

const calculateOpenings = (frames: Frame[]): number => {
  let openings = 0;
  // Choosing an appropriate threshold for the closed scissors
  const closedThreshold = 0;
  // Choosing an appropriate threshold for the opened scissors
  const openThreshold = 0.1; // I chose 0.1 because i feel that the scissors are definetly open at this y-value. (atleast according to the desmos graph provided)
  let isScissorsClosed = true;

  //iterate through each frame in the frames array
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const { y1, y3 } = frame;
    // Checking if both the top and bottom blades are below the closed threshold
    if (y1 >= closedThreshold && y3 >= closedThreshold) {
      isScissorsClosed = true;
      // if scissors are not closed but open:
    } else if (y1 <= openThreshold && y3 <= openThreshold && isScissorsClosed) {
      openings++; // scissors are open so add 1
      isScissorsClosed = false;
    }
  }
  console.log(`**** Openings: ${openings} ****`);
  return openings;
};

// Run the following with different frame JSON files
calculateOpenings(frames1);
calculateOpenings(frames2);
calculateOpenings(frames3);
calculateOpenings(frames4);
calculateOpenings(frames5);
calculateOpenings(frames6);
calculateOpenings(frames7);
