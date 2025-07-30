import React, { FC } from "react";
const mapUrl = process.env.NEXT_PUBLIC_MAP_URL;

const MapComponent: FC = () => {
  return (
    <div className="w-full h-[500px] overflow-hidden rounded-xl">
      <iframe
        src={mapUrl}
        width="100%"
        height="600"
        style={{
          border: 0,
          marginTop: "-70px",
          marginRight: "-60px"
        }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
