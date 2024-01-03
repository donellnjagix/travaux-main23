'use client'
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { properties } from '..';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import the styles
import Link from 'next/link';
import Footer from '@/app/footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import PropertyListing from '../PropertyListing';
import { useRouter } from 'next/router';



type Props = {};

const Property = (props: Props) => {
  const router = useRouter();
const { propertyId } = router.query;
const id = propertyId as string;
const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found!</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % property.image.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + property.image.length) % property.image.length
    );
  };

  return (
    <div>
      <div className="md:flex justify-between items-start pt-28 gap-8 mb-4 w-5/6 mx-auto">
        {/* image slider */}
        <div className="basis-1/2 relative w-auto h-72 sm:h-[60vh]">
          <Carousel
            showThumbs={false}
            showArrows={false}
            selectedItem={currentIndex}
            onChange={setCurrentIndex}
          >
            {property.image.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`propertyImg${index}`}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '10px',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            ))}
          </Carousel>
          <button onClick={handlePrev} className="arrow-button left-arrow">
            &lt;
          </button>
          <button onClick={handleNext} className="arrow-button right-arrow">
            &gt;
          </button>
        </div>
        {/* end */}
        {/* description */}
        <div className="flex flex-col basis-1/2 gap-2 mt-6">
          <h1 className="font-bold text-xl text-accent-orange">{property?.name}</h1>
          <p>
            Ksh{' '}
            <span className="text-accent-gray font-extrabold">{property?.price}</span>{' '}
          </p>
          <PropertyListing longDescription={property?.longDescription} />
          <Link
            className="bg-accent-orange text-accent-black rounded-sm py-1 px-4 w-fit hover:bg-orange-400"
            href="/properties"
          >
            Back
          </Link>
          <Link
            className="bg-green-600 text-white rounded-sm py-1 px-4 w-fit hover:bg-green-700"
            href="https://api.whatsapp.com/send?phone=+254729304190"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us on WhatsApp
          </Link>
        </div>
        {/* end */}
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Property;
