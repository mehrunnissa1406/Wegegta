<template>
    <VRow>
        <VCol cols="11" md="7">
            <div class="text-left">
                <div class="border-l-8 pl-2 rounded border-pm py-3 md:ml-36 sm:ml-12 md:mb-3 text-pm">
                <h1 class="md:text-3xl sm:text-lg font-bold">{{ h1 }}</h1>
                <h6 class="md:text-lg sm:text-sm">{{ Subh1 }}</h6>
                </div>
                <p class="md:ml-40 sm:ml-16 sm:mt-4 md:mt-0">{{ p1 }}</p><br>
            </div>
        </VCol>
        <VCol cols="12" md="3" class="relative">
            <img :src="img" alt="" class="md:flex sm:hidden absolute bottom-0 top-0 right-0 h-full shadow-lg">
            <img :src="logo" class="md:hidden sm:flex mx-14 w-96  my-0" alt="">
        </VCol>
    </VRow>
</template>
<script>
import logo from '../assets/images/About/2.jpg'
import img from '../assets/images/About/game-icons_target-prize.png'
export default {
    data: () => ({
        p1: "Our mission is to provide our customers with the freshest, highest-quality agricultural products possible. We are committed to sustainable agriculture practices, and we use only the most natural methods to grow our crops and raise our animals. We are also proud to be a part of our community, and we are committed to giving back.",
        h1: 'Our Mission',
        Subh1: 'WEGEGTA',
        img,
        logo,
    }),
}
</script>