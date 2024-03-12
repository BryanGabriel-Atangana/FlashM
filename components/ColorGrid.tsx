import React, { useState } from "react";

interface ColorGridProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const colorGrid: string[] = [
  "#FF5733", // Coral
  "#FFBD33", // Selective Yellow
  "#337AFF", // Blue
  "#8C33FF", // Wisteria
  "#FFA933", // Orange Peel
  "#D44126", // Darker Coral
  "#B68824", // Darker Selective Yellow
  "#2E8058", // Darker Medium Spring Green
  "#1C4A7A", // Darker Blue
  "#5B1C71", // Darker Wisteria
  "#D92ABD", // Darker Neon Pink
  "#1C1C71", // Darker Dodger Blue
  "#1C887A", // Darker Medium Aquamarine
  "#74991C", // Darker Inchworm
];

const ColorGrid: React.FC<ColorGridProps> = ({
  selectedColor,
  setSelectedColor,
}) => {
  const handleColorClick = (color: string): void => {
    setSelectedColor(color);
  };

  return (
    <div className="px-4">
      <h2>Couleur :</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }} className="pb-4">
        {colorGrid.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              margin: "5px",
              cursor: "pointer",
              border: color === selectedColor ? "4px solid #E0E1E6" : "none",
            }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <p>Code HEX : {selectedColor}</p>
    </div>
  );
};

export default ColorGrid;
