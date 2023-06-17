<template>
    <div>
        <hero />
    </div>
    <div>
        <About />
    </div>
    <div class="md:my-20">
        <MV />
    </div>
    <div class="md:my-20">
        <Venture />
    </div>
    <div class="md:my-20">
        <Banner color="pm"/>
    </div>
    <div class="md:my-28 sm:my-10">
        <Products/>
    </div>
    <div class="md:mt-28">
        <testimonial />
    </div>
    <div class="md:ml-24 mt-10 sm:ml-10">
        <Blog/>
    </div>    
</template>
<script>
import Hero from "../components/HeroSection.vue";
import About from "../components/About.vue";
import Venture from "../components/BVenture.vue";
import MV from "../components/MV.vue";
import Banner from "../components/Banner.vue";
import Products from "../components/Products.vue";
import testimonial from "../components/testimonial.vue";
import Blog from "../components/HBlog.vue";

export default {
    components: {
        Hero,
        About,
        Venture,
        MV,
        Banner,
        Products,
        testimonial,
        Blog,
    },
    data() {
        return {
        }
    }
}
</script>
