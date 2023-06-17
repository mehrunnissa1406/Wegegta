<template>
    <div class="bg-pm">
        <VRow class="sm:mx-6 md:mx-0 sm:pt-6 md:pt-0">
            <VCol cols="12" md="5">
                <div class="text-white text-left md:mb-28 md:ml-20">
               <breadcrumb link="Venture"/>
                    <div class="md:space-y-6">
                        <img :src="img" class="sm:w-8 md:w-16" alt="">
                        <h1 class="md:text-3xl md:font-extrabold sm:text-xl sm:font-bold sm:mb-6">{{ h1 }}</h1>
                        <p class="sm:text-sm md:text-lg">{{ p1 }}</p><span class="sm:text-sm md:text-lg">{{ p2 }}</span>
                    </div>
                </div>
            </VCol>
            <VCol cols="12" md="7" class="md:relative sm:mt-12">
                <img :src="img2" alt="" class="md:absolute md:bottom-0 md:right-12 sm:mb-0">
            </VCol>
        </VRow>
    </div>
</template>
<script>
import img from '../assets/images/Venture/2287847421639478750 1.png'
import img2 from '../assets/images/Venture/Group 1.png'
import breadcrumb from '../components/breadcrumb.vue'

export default {
    components: { breadcrumb },
    data: () => ({
        p1: "An agri-business venture is a business that is involved in the production, processing, or distribution of agricultural products. Agri-business ventures can range in size from small family farms to large multinational corporations.",
        p2: "Agri- business ventures play an important role in the global economy.They provide food and fiber for the world's population, and they support millions of jobs. Agri-business ventures are also important contributors to economic development in rural areas.",
        h1: 'Business Ventures',
        img,
        img2,
    }),
}
</script>