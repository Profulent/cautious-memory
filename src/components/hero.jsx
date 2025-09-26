import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4
  const nextVideoRef = useRef(null) //nextVideoRef = { current: null } (useRef)

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1)
  }

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1

  const handleMiniVdClick = () => {
    setHasClicked(true)

    setCurrentIndex(upcomingVideoIndex)
  }

  useEffect(()=>{
    if(loadedVideos === totalVideos-1) {
      setIsLoading (false)
    }
  }, [loadedVideos])

  useGSAP(() => {
    if (hasClicked) {
      gsap.set('#next-video', { visibility: 'visible' })

      gsap.to('#next-video', { // to means go to this state
        transformOrigin: 'center center', //zooms from the center 
        scale: 1, // grows to full size (1)
        width: '100%',
        height: '100%',
        duration: 1, // animation lasts one second
        ease: 'power1.inOut', // controls speed curve of the animation, makes the zoom smooth. 
        onStart: () => nextVideoRef.current.play(), // ensures video plays right when the zoom animation starts
      })

      gsap.from('#current-video', { // pretends that it starts from the given attributes below to normal DOM state in the end.
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
        onStart: () => nextVideoRef.current.play(),
      })
    }
  }, { dependencies: [currentIndex], revertOnUpdate: true })




  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: "polygon(14% 0%, 72% 0%, 88% 90%, 0% 95%)",
      borderRadius: '0% 0% 40% 10%',
    })

    gsap.from('#video-frame', {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: '0% 0% 0% 0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
  })


  const getVideoSrc = (index) =>
    `videos/hero-${index}.mp4`

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">

      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">

              <video // all these attributes for the minivideoplayer and the above onClick
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />

            </div>
          </div>


          <video // This is like a staging area, a buffering kind of video, when you make a zoom in effect tabb ye help karega
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />



          <video // This is the background video
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
          G<b>a</b>ming
        </h1>



        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the MetaGame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />


          </div>
        </div>
      </div>

      <h1
        className="special-font hero-heading absolute *
        bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  )
}

export default Hero