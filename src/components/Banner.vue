<template>
    <div :class="[`flex flex-col md:space-y-6 bg-${color}`]">
        <div class="my-20 md:ml-28 sm:ml-10 text-white">
            <p class="md:text-sm sm:text-xs">Newsletter</p>
            <VRow>
                <VCol cols="7" md="4">
                    <h1 class="md:text-2xl sm:text-lg font-bold">{{ h1 }}</h1>
                    <p>{{ p1 }}</p>
                </VCol>
                <VCol cols="10" md="7">
                    <form action="">
                        <input type="text" class="bg-btbg text-white md:w-80 sm:w-70 md:p-6 sm:p-3 border-inherit" value="Enter your email">
                        <button class="bg-white md:mx-4 sm:mx-1 w-32 md:p-6 sm:px-4 sm:p-4"><div class="text-pm text-sm">Subscribe</div></button>
                    </form>
                </VCol>
            </VRow>
        </div>
        <div class="relative">
            <img :src="img1" class="absolute bottom-0 sm:right-0 md:left-0 md:w-72 md:h-20 sm:w-28" alt="">
            <img :src="img2" class="absolute md:bottom-0 sm:bottom-8 right-0 md:w-72 sm:w-28 md:h-20" alt="">
        </div>
    </div>
</template>
<script>
import img2 from '../assets/images/Home/Banner/Vector.png'
import img1 from '../assets/images/Home/Banner/ship-1.png'

export default {
    props:['color'],
    data() {
        return {
            img1,
            img2,
            h1: 'Get Weekly Updates',
            p1: 'Lorem ipsum dolor sit amet consectetur. Velit massa viverra viverra sed at at etiam. Nisi vitae.',
        }
    }
}
</script>