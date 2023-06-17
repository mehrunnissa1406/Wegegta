<template>
    <VRow>
        <VCol>
            <VSheet class="sm:ml-10 md:ml-0 sm:mb-96 md:mb-0">
                <img :src="img1" class="absolute z-0 md:ml-10 sm:w-64 md:w-auto" alt="">
                <img :src="img2" class="absolute z-10 md:ml-36 md:mt-28 md:w-auto sm:mx-28 sm:my-24 sm:w-64" alt="">
            </VSheet>
        </VCol>
        <VCol class="md:ml-56 md:mt-24 md:mr-10 sm:mt-24 sm:ml-10" cols="10" md="">
            <VSheet>
                <div class="font-serif">
                    <img :src="vector" class="md:w-10 md:mb-6 sm:w-6" alt="">
                    <h1 class="text-sn sm:text-xl font-bold md:text-4xl">{{ h1 }}</h1>
                    <p class="font-serif text-left md:my-12 sm:my-6">{{ p1 }}</p>
                    <h1 class="flex flex-col underline decoration-solid decoration-2 underline-offset-8 text-sn font-bold md:text-2xl">{{ h2 }}</h1>
                    <p class="text-lef md:my-12 sm:mt-6">{{ p2 }}</p>
                    <img :src="bgimg" class="md:mt-28 w-full sm:my-6" alt="">
                </div>
            </VSheet>
        </VCol>
    </VRow>
</template>
<script>
import bgimg from '../assets/images/Home/MV/project-bg 1.png'
import img1 from '../assets/images/Home/MV/chicken-2.png'
import img2 from '../assets/images/Home/MV/chicken-1.png'
import vector from '../assets/images/Home/MV/Vector.png'
export default {
    data() {
        return {
            bgimg,
            img1,
            img2,
            vector,
            p1: 'Our mission is to provide our customers with the freshest, highest-quality agricultural products possible. We are committed to sustainable agriculture practices, and we use only the most natural methods to grow our crops and raise our animals. We are also proud to be a part of our community, and we are committed to giving back. ',
            p2: 'We believe that Ethiopia is a country that has resources that can be developed and has been given to its citizens without discrimination by the creator plus We believe that union is a divine gift and our power of effectiveness.',
            h1: 'Wegegta’s  Values & Vision',
            h2: 'Our Values',
        }
    },
}
</script>
