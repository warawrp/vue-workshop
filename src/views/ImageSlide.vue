<template>
  <div id="imageSlide" class="container-fluid mt-3">
    <p style="color: #0075ff;" class="text-center mb-3">Image Slide</p>
    <VueSlickCarousel v-bind="settings">
      <div v-for="item in images" :key="item.id">
          <img :src="item.picture" class="slide-image"/>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'ImageSlide',
    components: { VueSlickCarousel },
    data(){
      return{
        settings:{
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "arrows": true,
          "autoplay": true,
          "autoplaySpeed": 4000,
          "pauseOnDotsHover": true,
          "pauseOnFocus": true,
          "pauseOnHover": true
        },
        images:[
          {
              id:1,
              picture: 'https://cdn.pixabay.com/photo/2020/12/12/13/07/bird-5825414__340.jpg'
          },
          {
              id:2,
              picture: 'https://cdn.pixabay.com/photo/2019/12/11/18/06/dog-4688913__340.jpg'
          },
          {
              id:3,
              picture: 'https://cdn.pixabay.com/photo/2016/11/19/14/30/aurora-borealis-1839582__340.jpg'
          },
        ]
      }
    }
  }
</script>

<style scoped>
.slick-slider {
  width:100%;
  height: 500px;
}

.slick-slider{
  outline: none;
  background-color: #2f3241;
  height: 500px;
  z-index:9;
}

/* ::v-deep .slick-arrow:before {
  color: #2f324150;
  font-size: 50px;
  opacity: 1;
} */

::v-deep .slick-prev:before {
  color: #00000080;
  font-size: 25px;
}

::v-deep .slick-next:before {
  color:  #00000080;
  font-size: 25px;
}

.slide-image{
  width: 100%;
  height: 500px;
  overflow: hidden;
  object-fit: cover;
}

</style>

