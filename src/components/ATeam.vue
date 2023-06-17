<template>
    <VRow>
        <VCol cols="12" md="5">
            <div class="text-left md:mr-6">
                <div class="border-l-8 pl-2 rounded border-pm md:py-6 sm:py-2 md:ml-36 text-pm">
                    <h6 class="md:text-sm sm:text-xs">{{ h2 }}</h6>
                    <h1 class="md:text-2xl font-bold">{{ h1 }}</h1>
                    <h1 class="md:text-2xl font-bold"> {{ Subh1 }}</h1>
                </div>
                <p class="md:ml-40 sm:ml-5 sm:mt-5 md:mt-0">{{ p1 }}</p><br>
            </div>
        </VCol>
        <VCol cols="12" md="">
            <VRow class="md:ml-28 md:mr-16 sm:ml-5 mb-20">
                <VCol v-for="(item, index) in cards" :key="index" cols="6"
                    class="text-center shadow-lg mt-4 shadow-gray-300 sm:my-3">
                    <div class="md:p-3 md:my-2">
                        <img :src="item.img" alt="" class="sm:w-20 md:w-28 mx-auto">
                        <h1 class="text-sn md:text-lg sm:text-xs font-bold">{{ item.h1 }}</h1>
                        <span class="md:text-lg sm:text-xs">{{ item.position }}<br>
                        {{ item.p1 }}</span>
                    </div>
                </VCol>
            </VRow>
        </VCol>
    </VRow>
</template>
<script>
import img from '../assets/images/About/game-icons_target-prize.png'
import icon2 from '../assets/images/About/Vector 11 (2).png'
import icon3 from '../assets/images/About/Vector 11 (3).png'
import icon4 from '../assets/images/About/Vector 11 (4).png'
import icon1 from '../assets/images/About/Vector 11.png'
export default {
    data: () => ({
        p1: "Our team is made up of experienced farmers and ranchers who are passionate about agriculture. We are committed to providing our customers with the best possible service, and we are always looking for new ways to improve our products and services.We hope you will visit us soon and see for yourself why we are so passionate about agriculture.We are confident that you will be impressed with the quality of our products and the dedication of our staff.",
        h1: 'Professional ',
        h2: 'TEAM',
        Subh1: 'working Team',
        img,
        cards: [
            { img: icon1, h1: 'Ato Belay', p1: '( Chief Executive Officer )', position: 'CEO' },
            { img: icon2, h1: 'Ato Belay', p1: '( Chief Marketing Officer )', position: 'CMO' },
            { img: icon3, h1: 'Ato Belay', p1: '( Chief Technical Officer )', position: 'CTo' },
            { img: icon4, h1: 'Ato Belay', p1: '( Chief Finalcial Officer )', position: 'CMO' },
        ],
    }),
}
</script>