<template>
    <div id="slider">
    <v-carousel hide-delimiters class="sm:w-96 sm:mx-auto md:w-auto">
        <v-carousel-item v-for="(item, i) in slides" :key="i" :src="bimg">
            <div class="bg-white sm:mx-12 md:my-28 md:mx-80 md:text-2xl sm:text-xs font-bold sm:my-44 sm:p-6 md:p-16">
            "   {{ item }}    "
            </div>
        </v-carousel-item>
    </v-carousel>
    </div>
</template>
<script>
import bimg from '../assets/images/Home/testimonial/Rectangle 13.png'
export default {
    data() {
        return {
            bimg,
            slides: [
                "I would highly recommend Wegegta to any farmer who is looking to improve their operation. They can provide you with the resources and expertise you need to succeed in today's competitive agricultural market.",
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ],
        }
    },
}
</script>
<style scoped>
*{
  padding: 0;
}
#slider{
 width: 100%;
  height: 100vh;
  background: linear-gradient(
    to top,
    #ED8E26 0%,
    #ED8E26 50%,
    white 50%,
    white 100%
  );

}
</style>