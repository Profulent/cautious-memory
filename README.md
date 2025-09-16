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

ref={nextVideoRef} just gives you direct access to the <video> DOM node. In your code, since you’re not using it, removing it won’t break anything. It’s only useful if you later want to .play(), .pause(), .mute(), or manipulate the video in JS.

currentIndex will never go beyond 3 because of % totalvideos. The % ensures it wraps around.


setLoadedVideos((prev) => prev + 1)
is same as : 
setLoadedVideos((loadedVideos) => loadedVideos + 1)
First video loads → loadedVideos = 1
Second video loads → loadedVideos = 2
Third video loads → loadedVideos = 3

Why keep track of loadedVideos?
It gives you a count of how many videos have finished loading.
You could use it later for things like:
Showing a loading spinner until all videos are ready



You attach onLoadedData={handleVideoLoad} to all 3 <video> tags in your component.
So every time one of them finishes loading, loadedVideos increases by 1.
suppose while npm run dev the project , Every time a video finishes loading its data, React calls handleVideoLoad(). When that happens, loadedVideos goes up by +1

