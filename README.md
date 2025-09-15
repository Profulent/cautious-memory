we had to set up the fonts manually in tailwind.config.js and in index.css. 

## DOUBT : in tailwind.config.js there is export default {} written at the top, where does it exports to??  ---> It just gives tailwind the access to your config. 

the impt thing you gotta do is : @theme in index.css
  --font-general: general, "sans-serif";
  --font-robert-medium: robert-medium, "sans-serif";
  --font-robert-regular: robert-regular, "sans-serif";
  --font-circular-web: circular-web, "sans-serif";

@utility btn-primary {
  @apply px-4 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600;
} this is a way by which you can actually add custom class that is not a default class. this is a custom named class. 


The MiniVideoPlayer is the middle small video by which clicking it changes background to that video.

onLoadedData is a special handler, that allows us to call a function once a data loads.