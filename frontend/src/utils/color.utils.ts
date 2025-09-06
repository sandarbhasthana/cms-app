// export const getAvatarColors = (seed: string) => {
//   // Simple hash to generate consistent color
//   let hash = 0;
//   for (let i = 0; i < seed.length; i++) {
//     hash = seed.charCodeAt(i) + ((hash << 5) - hash);
//   }

//   const hue = Math.abs(hash) % 360; // HSL hue
//   return {
//     backgroundColor: `hsl(${hue}, 70%, 80%)`, // pastel background
//     color: `hsl(${hue}, 30%, 30%)`,           // darker text
//   };
// };

import MurmurHash3 from "imurmurhash";

// const palette = [
//   { bg: "#FDE68A", text: "#92400E" },
//   { bg: "#A7F3D0", text: "#065F46" },
//   { bg: "#BFDBFE", text: "#1E3A8A" },
//   { bg: "#FBCFE8", text: "#831843" },
//   { bg: "#E0E7FF", text: "#3730A3" },
//   { bg: "#FCA5A5", text: "#7F1D1D" },
//   { bg: "#D8B4FE", text: "#6B21A8" },
//   { bg: "#C7D2FE", text: "#312E81" }
// ];

export const getAvatarColors = (seed: string) => {
  const hash = MurmurHash3(seed).result(); // 32-bit integer
  const hue = hash % 360;
  const saturation = 60 + (hash % 20); // 60–79%
  const lightness = 70 + (hash % 10); // 70–79%

  return {
    backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    color: `hsl(${hue}, 30%, 20%)`
  };
};

// export const getAvatarColors = (seed: string) => {
//   const hash = MurmurHash3(seed).result();
//   const index = hash % palette.length;
//   return palette[index];
// };
