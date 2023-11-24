
import { Carousel } from 'flowbite-react';

const Carousal =()=> {
  return (
    <div className='w-full flex items-center justify-center'>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 md:w-1/2 w-full px-2 md:px-0">
      <Carousel slideInterval={1000}>
        <img src="https://c0.wallpaperflare.com/preview/920/519/697/abstract-php-c-analytics.jpg" alt="b" />
        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="a" />
        <img src="https://c4.wallpaperflare.com/wallpaper/851/501/292/programming-code-minimalism-wallpaper-preview.jpg" alt="c" />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="d" /> */}
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="e" /> */}
      </Carousel>
    </div>
    </div>
  );
}

export default Carousal