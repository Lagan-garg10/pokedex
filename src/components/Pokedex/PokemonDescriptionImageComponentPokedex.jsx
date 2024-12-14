import React, { useEffect, useState } from 'react';
import { extractColors } from 'extract-colors';

export default function PokemonDescriptionImageComponentPokedex({ data }) {
  const [imageLink, setImageLink] = useState('');

  // Fetch the image URL for the Pokémon
  async function getImage() {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${data}`);
      const json = await res.json();
      setImageLink(json.sprites.other.home.front_default);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  useEffect(() => {
    getImage();
  }, [data]);

  // Extract prominent color from the image using extract-colors library
  useEffect(() => {
    if (!imageLink) return;

    const getColor = async () => {
      try {
        
        const options = {
          pixels: 10000,
          distance: 1,
          splitPower: 10,
          colorValidator: (red, green, blue, alpha = 255) => alpha > 250,
          saturationDistance: 0.2,
          lightnessDistance: 0.2,
          hueDistance: 0.083333333,
          crossOrigin:'anonymous'
        };
        // const colors = await extractColors(imageLink, {
        //   // crossOrigin: 'anonymous', // This might not work if the server doesn't allow it
        //   // pixels: 10000, // Adjust for performance
        // });
        const colors = await extractColors(imageLink,options)

        if (colors.length > 0) {
          const prominentColor = colors[0].hex; // Extract the most prominent color
          // console.log('Extracted Color:', prominentColor);
          // console.log(colors)
          
          // Apply the color to a CSS variable
          const root = document.documentElement;
          root.style.setProperty('--accent-color', prominentColor);
        }
      } catch (error) {
        console.error('Error extracting colors:', error);
      }
    };

    getColor();
  }, [imageLink]);

  return (
    <div>
      <div className="flex mt-12 justify-center">
        <div className="flex justify-center items-center h-96 w-96 border-[0.2rem] border-solid border-accent relative rounded-[50rem]">
          <div className="h-80 w-80 border-[0.3rem] border-solid border-accent rounded-[40rem] flex justify-center items-center">
            <img
              className="max-inline-size-full max-block-size-auto h-[17rem] z-[100]"
              src={imageLink}
              alt="Pokemon"
              crossOrigin="anonymous"
            />
          </div>
          <div className="flex absolute gap-12">
            <div className="h-[28rem] w-[0.3rem] bg-accent rotate-45"></div>
            <div className="h-[28rem] w-[0.3rem] bg-accent rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
