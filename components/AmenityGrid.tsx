import React from "react";
import AmenityCard from "./AmenityCard";
import { amenities } from "./amenitiesData";


import ManagementAssuranceCard from "./ManagementAssuranceCard";

const AmenityGrid: React.FC = () => (
  <>
    {/* Desktop/Large screens: 4 columns, Management card in grid */}
    <div className="hidden lg:grid mt-8 sm:mt-10 md:mt-12 grid-cols-4 gap-8">
      {amenities.slice(0, 3).map((amenity) => (
        <AmenityCard key={amenity.title} {...amenity} />
      ))}
      {/* Management card top right */}
      <div className="col-span-1 row-span-2 px-0">
        <ManagementAssuranceCard />
      </div>
      {amenities.slice(3).map((amenity) => (
        <AmenityCard key={amenity.title} {...amenity} />
      ))}
    </div>

    {/* Tablet: 2 columns, Management card at end */}
    <div className="hidden md:grid lg:hidden mt-8 sm:mt-10 md:mt-12 grid-cols-2 gap-7">
      {amenities.map((amenity) => (
        <AmenityCard key={amenity.title} {...amenity} />
      ))}
      <div className="md:col-span-2 px-0">
        <ManagementAssuranceCard />
      </div>
    </div>

    {/* Mobile: 1 column, Management card at end */}
    <div className="grid md:hidden mt-8 sm:mt-10 md:mt-12 grid-cols-1 gap-6">
      {amenities.map((amenity) => (
        <AmenityCard key={amenity.title} {...amenity} />
      ))}
      <div className="px-2">
        <ManagementAssuranceCard />
      </div>
    </div>
  </>
);

export default AmenityGrid;
