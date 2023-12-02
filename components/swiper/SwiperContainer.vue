<template>

    
    

<div id="animation-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <img src="" width="250" style="margin-left: 10px;" />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/assets/logo-white.png" width="250" style="margin-left: 10px;" />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item="active">
            <img src="~/assets/logo-white.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

  </template>
  
  <script>
import Swiper from 'swiper';

export default {
  data() {
    return {
      activeIndex: 1,
      slides: [
        {
          link: 'https://ditusi.co.id/transaction/manual-bp-genshin-crystal---login',
          image: 'https://ditusi.co.id/assets/uploads/sliders/1697675847_6841465ede0f7bf558e4.jpg',
        },
        // Add other slides with link and image properties
      ],
    };
  },
  computed: {
    wrapperStyle() {
      return {
        'transition-duration': '0ms',
        'transform': `translate3d(${-this.activeIndex * 514}px, 0px, 0px)`,
        'perspective-origin': '1285px 50%',
      };
    },
  },
  methods: {
    slideStyle(index) {
      const rotateY = (index - this.activeIndex) * 30;
      const translateZ = Math.abs(index - this.activeIndex) * 200;
      return {
        'background-image': `url(${this.slides[index].image})`,
        'width': '514px',
        'transition-duration': '0ms',
        'transform': `translate3d(0px, 0px, ${-translateZ}px) rotateX(0deg) rotateY(${rotateY}deg)`,
        'z-index': index === this.activeIndex ? 1 : index < this.activeIndex ? -index : 2 * index,
      };
    },
    shadowStyle(index, side) {
      const opacity = side === 'left' ? Math.min(2, index - this.activeIndex) : Math.min(2, this.activeIndex - index);
      return {
        'opacity': opacity,
        'transition-duration': '0ms',
      };
    },
  },
  mounted() {
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Add other Swiper options as needed
    });
  },
};
</script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  
