<template>
    <div class="bg-pm">
        <VRow class="sm:mx-6 md:mx-0 sm:pt-5 md:pt-0">
            <VCol cols="12" md="5">
                <div class="text-white text-left md:mb-28 md:ml-28">
                    <breadcrumb link="About"/>
                    <img :src="img2" class="sm:w-8 md:w-10" alt="">
                    <h1 class="md:text-3xl md:font-extrabold sm:text-xl sm:font-bold sm:mb-6">{{ h1 }}</h1>
                     <p class="sm:text-xs md:text-sm">{{ p1 }}</p><br><p class="sm:text-xs md:text-sm">{{ p2 }}</p>
                </div>
            </VCol>
            <VCol cols="7" class="md:relative md:flex sm:hidden">
                <img :src="img" alt="" class="absolute bottom-0 top-0 right-0 h-full shadow-lg">
            </VCol>
            <VCol class="md:hidden sm:flex">
                <img :src="img3" alt="">
            </VCol>
        </VRow>
    </div>
</template>
<script>
import img from '../assets/images/About/Hero/Hero.png'
import img2 from '../assets/images/About/Hero/ic_outline-grass.png'
import img3 from '../assets/images/Venture/Group 1.png'
import breadcrumb from '../components/breadcrumb.vue'
export default {
    components:{ breadcrumb },
    data: () => ({
        p1: "At Wegegta, we are passionate about agriculture and the role it plays in our food system. We believe that everyone deserves access to fresh, healthy food, and we are committed to providing our customers with the highest-quality products possible.",
        p2:"We are a family- owned and operated business that has been in operation for the past years.We are committed to sustainable agriculture practices, and we use only the most natural methods to grow our crops.We also raise our own animals, and we believe that humanely- raised meat and poultry is the best way to ensure that our customers are getting the healthiest possible food.",
        h1: 'About us',
        img,
        img2,
        img3,
    }),
}
</script>