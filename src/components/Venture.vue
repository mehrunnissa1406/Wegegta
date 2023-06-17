<template>
    <VRow class="justify-center">
        <VCol v-for="(item, index) in cards" :key="index" cols="4" md="2"
            class="flex flex-col text-center m-8 md:px-2 md:py-28 sm:py-20 items-center md:w-1/3 bg-pm bg-opacity-10 hover:bg-pm hover:text-white hover:fill-white">
            <div class="w-full text-white">
                <img :src="item.src" class="hover:w-24 md:w-20 sm:w-16 mx-auto mb-12 " alt="">
            </div>
            <div class="font-serif mx-auto md:font-bold">
                {{ item.title }}
            </div>
        </VCol>
    </VRow>
</template>
<script>
import fish from '../assets/images/Home/about/fish.png'
import milk from '../assets/images/Home/about/cow.png'
import chicken from '../assets/images/Home/about/chicken-2-svgrepo-com.png'
import storage from '../assets/images/Home/about/14918076621578629624.png'
import machine from '../assets/images/Venture/Group.png'
import egg from '../assets/images/Venture/Group (2).png'
import coffee from '../assets/images/Venture/Group (3).png'
import meat from '../assets/images/Venture/Group (4).png'
export default {
    components: {
    },
    data() {
        return {
            title: 'Farm Ecology Products',
            para: 'Farm ecology products are a type of agricultural input that is designed to improve the health and productivity of soil and crops.They can be used to reduce the use of synthetic fertilizers and pesticides, and to improve the sustainability of agricultural production.',
            cards: [
                { title: 'Abattoir & Milk', src: milk },
                { title: 'Poultry feed', src: chicken },
                { title: 'Safe  Storage', src: fish },
                { title: 'Fishery', src: storage },
                { title: 'Machine', src: machine },
                { title: 'Egg Production', src: egg },
                { title: 'Coffee Farn', src: coffee },
                { title: 'Chicken Meat', src: meat },
            ],

        }
    }
}
</script>
