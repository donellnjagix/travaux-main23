// Import necessary libraries and components
import React from 'react';
import Video from 'next-video';
import FloatingWButton from "../components/WhatsAppButton";

// Import the video file
import awesomeVideo from '@/videos/video1.mp4';

// Define the Props type
type Props = {}

// Create the page component
const Page = (props: Props) => {
  return (
    <div className='pt-20'>
      {/* Display a title */}
      <h1>Projects</h1>

      {/* Display the video using the Video component */}
      <Video src={awesomeVideo} />

      {/* Add the WhatsApp floating button */}
      <FloatingWButton />
    </div>
  );
}

// Export the page component
export default Page;
