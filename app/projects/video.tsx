import React from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import Video from 'next-video';  // Import Video from next-video package

const ProjectsHero: React.FC = () => {
  return (
    <section>
      {/* Illustration behind hero content */}
      <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
        {/* Your SVG illustration goes here */}
      </div>

      {/* Hero content */}
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h1 mb-4" data-aos="fade-up">More Projects Coming Soon</h1>
          <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
            Be on the lookout for exciting new projects. We're working hard to bring you innovative and inspiring creations.
          </p>
        </div>

        {/* Video Modal */}
        <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1024}
          thumbHeight={576}
          thumbAlt="Modal video thumbnail"
        >
          {/* Use next-video Video component */}
          <Video src="@/ "> 
          {/* Replace with the actual path to your video file */}
        </ModalVideo>
      </div>
    </section>
  );
};

export default ProjectsHero;
