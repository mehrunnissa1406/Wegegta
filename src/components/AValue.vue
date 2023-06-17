<template>
    <VRow class="md:flex-row sm:flex-col-reverse">
        <VCol class="md:ml-28 mx-12" cols="10" md="5">
            <VRow class="md:space-y-4">
                <VCol v-for="(item, index) in cards" :key="index" cols="6" class="text-center my-10 space-y-6 items-center justify-between">
                    <img :src="item.img" alt="" class="mx-auto">
                    <h1 class="text-sn text-lg font-bold">{{ item.h1 }}</h1>
                    {{ item.p1 }}
                </VCol>
            </VRow>
        </VCol>
        <VCol cols="12" md="6">
            <div class="md:text-left md:mr-6 sm:mr-6">
                <div class="md:border-l-8 md:border-r-0 sm:text-right md:text-left sm:border-r-8 md:pl-2 sm:pr-2 rounded md:text-2xl sm:text-lg font-bold border-pm py-3 md:ml-36 md:mb-3 text-pm">
                    <h1>{{ h1 }}</h1>
                    <h6 class="sm:uppercase md:normal-case">{{ Subh1 }}</h6>
                </div>
                <p class="md:ml-40 sm:ml-10">{{ p1 }}</p><br>
            </div>
        </VCol>
    </VRow>
</template>
<script>
import img from '../assets/images/About/game-icons_target-prize.png'
import icon2 from '../assets/images/About/Vector (2).png'
import icon3 from '../assets/images/About/Vector (3).png'
import icon4 from '../assets/images/About/Vector (4).png'
import icon1 from '../assets/images/About/Vector.png'
export default {
    data: () => ({
        p1: "Company values can be a powerful tool for creating a strong company culture. When employees share a common set of values, they are more likely to be motivated and engaged in their work. This can lead to improved productivity, customer satisfaction, and profitability.",
        h1: 'Our Company',
        Subh1: 'Values',
        img,
        cards: [
            { img: icon1, h1: 'Transparent', p1: 'A commitment to honesty, ethics, and fairness.' },
            { img: icon2, h1: 'Commitment', p1: 'A commitment to providing high-quality products or services.' },
            { img: icon3, h1: 'Always Growing', p1: 'A commitment to continuous improvement and innovation.' },
            { img: icon4, h1: 'Over Deliver', p1: 'A commitment to continuous improvement and innovation.' },
        ],
    }),
}
</script>