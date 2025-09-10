we had to set up the fonts manually in tailwind.config.js and in index.css. 

## DOUBT : in tailwind.config.js there is export default {} written at the top, where does it exports to??  ---> It just gives tailwind the access to your config. 

the impt thing you gotta do is : @theme in index.css
  --font-general: general, "sans-serif";
  --font-robert-medium: robert-medium, "sans-serif";
  --font-robert-regular: robert-regular, "sans-serif";
  --font-circular-web: circular-web, "sans-serif";