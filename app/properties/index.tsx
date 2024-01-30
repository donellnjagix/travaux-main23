"use client";
import React from "react";
import { ClassType } from "../types/types";
import Card from "../components/Card";
import img1 from "@/public/images/design/img1.jpg";
import img2 from "@/public/images/design/img2.jpg";
import img3 from "@/public/images/Maisonettes3/CM 1.jpg";  
import img4 from "@/public/images/Maisonettes3/CM 2.jpg";  
import img5 from "@/public/images/Maisonettes3/CM 3.jpg";  
import img6 from "@/public/images/Maisonettes3/CM 4.jpg";  
import img7 from "@/public/images/Maisonettes3/FIRST FLOOR_page-0001.jpg";  
import img8 from "@/public/images/Maisonettes3/Roof plan_page-0001.jpg";  
import Link from "next/link";
import img9 from "@/public/images/Maisonettes5/Flat Roof 1.jpg"; 
import img10 from "@/public/images/Maisonettes5/Utawala 1.jpg"; 
import img11 from "@/public/images/Maisonette4/12 X 35 Flat Roof 3D.jpg"; 
import img12 from "@/public/images/Maisonette4/4 bedroom flat roof 40 x 80_page-0001.jpg";

// Define property types (modify as needed)
const propertyTypeOptions = ["All", "Bungalow", "Apartment", "Maisonette", "Villa"];

export const properties: Array<ClassType> = [
  // ... (previous property entries)


  {
    id: 2,
    name: "4 Bedroom Bungalow",
    price: 5000,  
    image: [img12.src, img11.src],
    shortDescription: "This 4000Sqft flat roof bungalow design is an iconic piece of architecture with a completely reimagined approach to urban design",
    longDescription:
      " It sits on a 100ft x 100ft or ¼ acre piece of property. The design provides an interplay of voluminous interiors and gardens as you bask in the extended heights of glass facades withplenty of natural light and a vibrant street look.   ",
    propertyType: "Bungalow",
    location: "City A",
    landSize: "100ft x 100ft",
    selections: 4, // Add the number of selections
  },

  {
    id: 8,
    name: "4 Bedroom Bungalow",
    price: 5000,  
    image: [img12.src, img11.src],
    shortDescription: "This 4000Sqft flat roof bungalow design is an iconic piece of architecture with a completely reimagined approach to urban design",
    longDescription:
      " It sits on a 100ft x 100ft or ¼ acre piece of property. The design provides an interplay of voluminous interiors and gardens as you bask in the extended heights of glass facades withplenty of natural light and a vibrant street look.   ",
    propertyType: "Bungalow",
    location: "City A",
    landSize: "100ft x 100ft",
    selections: 4, // Add the number of selections
  },
  {
    id: 1,
    name: "4 Bedroom Luxury Flat Roof Bungallow design",
    price: 5000,
    image: [img4.src, img5.src, img6.src, img7.src,img8.src],
    shortDescription: "The 4-bedroom Mid-Modern Maisonette embodies sophistication and space.",
    longDescription: `
    The 4-bedroom Mid-Modern Maisonette embodies sophistication and space. With its sleek design, open layout, and large windows, it seamlessly blends form and function, offering a harmonious and stylish living experience.<br><br>

    <p><strong>Price/Construction Cost</strong> - ksh. 16,500,00.00 / Usd 119,00.00</p>
    <p><strong>Classification:</strong> Luxury Flat Roof Bungalow.</p>
    <p><strong>AREA:</strong> 370 SM / 4000 Sq.ft</p>
    <p><strong>Details:</strong></p>
    <p>This 4000Sqft flat roof bungalow design is an iconic piece of architecture with a completely reimagined approach to urban design. It sits on a 100ft x 100ft or ¼ acre piece of property. The design provides an interplay of voluminous interiors and gardens as you bask in the extended heights of glass facades with plenty of natural light and a vibrant street look.</p>
    <p><strong>Salient Features:</strong></p>
    <ul>
        <li>A parking lot to fit 4 cars.</li>
        <li>Open plan layout kitchen.</li>
        <li>Dining Area.</li>
        <li>3 Lounges
            <ul>
                <li>Entertainment lounge with a fireplace.</li>
                <li>Family lounge with a fireplace.</li>
                <li>An outdoor barbeque lounge and grill facing the lush green gardens.</li>
            </ul>
        </li>
        <li>4 bedrooms all ensuite
            <ul>
                <li>A master bedroom complete with a walk-in closet.</li>
                <li>Two guest bedrooms.</li>
                <li>An attached DsQ room.</li>
            </ul>
        </li>
        <li>A laundry room.</li>
        <li>A spacious home office.</li>
    </ul>
        
  `,
propertyType: "Bungalow",
    location: "City B",
    landSize: "100ft x 100ft",
    selections: 4, // Add more property entries with relevant details
  },
  {
    id: 3,
    name: "Properties",
    price: 1000,
    image: [img3.src, img4.src, img5.src, img6.src, img7.src, img8.src,],
    shortDescription: "Massionete _ Bungallows on 1/4 Acre ",
    longDescription:
      "This is how your dream should look ",
    propertyType: "Apartment",
    location: "City B",
    landSize: "N/A",
    selections: 3, // Add more property entries with relevant details
  },

  {
    id: 4,
    name: "Properties",
    price: 1000,
    image: [img3.src],
    shortDescription: "Massionete _ Bungallows on 1/4 Acre ",
    longDescription:
      "This is how your dream should look ",
    propertyType: "Apartment",
    location: "City B",
    landSize: "N/A",
    selections: 3, // Add more property entries with relevant details
  },

  {
    id: 5,
    name: "Properties",
    price: 1000,
    image: [img3.src, img9.src, img10.src,],
    shortDescription: "Massionete _ Bungallows on 1/4 Acre ",
    longDescription:
      "This is how your dream should look ",
    propertyType: "Massionete ",
    location: "City B",
    landSize: "50FT * 100FT",
    selections: 4, // Add more property entries with relevant details
  },

];

const Property = () => {
  const [selectedPropertyType, setSelectedPropertyType] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedLandSize, setSelectedLandSize] = React.useState("");
  const [selectedNumber, setSelectedNumber] = React.useState<number | null>(null);

  // Implement search logic here
  const filterProperties = () => {
    return properties.filter((property) => {
      // Apply filters here based on selected criteria
      if (
        (selectedPropertyType === "All" ||
          property.propertyType === selectedPropertyType) &&
        (selectedLandSize === "" || property.landSize === selectedLandSize) &&
        (selectedNumber === null || property.selections === selectedNumber) &&
        (property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.shortDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });
  };

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPropertyType(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here, filtering properties based on searchQuery
    // For example, you can set the state or modify the filterProperties function.
  };

  return (
    <div id="properties" className="mx-auto w-5/6 pt-28">
      {/* Filter */}
      <div className="filter-container flex flex-col sm:flex-row justify-between items-center">
        {/* Property Type Filter */}
        <div className="filter-type mb-4 sm:mb-0">
          <label>Property Type:</label>
          <select
            value={selectedPropertyType}
            onChange={handlePropertyTypeChange}
            className="ml-2 p-2 rounded-md border border-gray-300 text-black"
          >
            {propertyTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* Land Size Filter */}
        <div className="filter-type mb-4 sm:ml-4">
          <label>Land Size:</label>
          <select
            value={selectedLandSize}
            onChange={(e) => setSelectedLandSize(e.target.value)}
            className="ml-2 p-2 rounded-md border border-gray-300"
          >
            <option value="">Any Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        {/* Number of Selections Filter */}
        <div className="filter-type mb-4 sm:ml-4">
          <label>Number of Bedroom:</label>
          <div className="flex ml-2 space-x-2">
            <button
              className={`${
                selectedNumber === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(1)}
            >
              1
            </button>

            <button
              className={`${
                selectedNumber === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(2)}
            >
              2
            </button>
            <button
              className={`${
                selectedNumber === 3
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(3)}
            >
              3
            </button>

            <button
              className={`${
                selectedNumber === 4
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(4)}
            >
              4
            </button>

            {/* ... (similar buttons for 2, 3, and 4 bedrooms) */}
          </div>
        </div>
        {/* Search Bar */}
        <div className="filter-type mb-4 sm:ml-4">
          <label>Search:</label>
          <div className="flex ml-2 space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md border border-gray-300"
            />
            <button
              className="bg-orange-500 text-white px-3 py-1 rounded-full"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filterProperties().map(
          ({
            id,
            name,
            price,
            image,
            shortDescription,
          }: ClassType) => (
            <div key={id}>
              <Link href={`/properties/${id}`}>
                <Card
                  id={id}
                  name={name}
                  price={price}
                  image={image}
                  shortDescription={shortDescription}
                />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Property;
