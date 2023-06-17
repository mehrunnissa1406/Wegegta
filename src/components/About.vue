<template>
    <VRow class="md:mx-28 md:my-28 sm:ml-2 justify-center">
        <VCol order="1" cols="4">
                <img :src="vector" class="flex flex-col md:w-10 w-6" alt="">
                <h1 class="flex flex-col text-sn sm:text-xl font-bold md:text-4xl">{{ title }}</h1>
        </VCol>
        <VCol order="2" cols="3">
                <p class="text-text opacity-20 mt-5 font-bold justify-center sm:text-xl md:text-5xl">_____________</p>

        </VCol>
        <VCol order="3" cols="5">
                <p class="sm:text-xs md:text-xl">{{ para }}</p>

        </VCol>
    </VRow>
     <VRow class="justify-center">
            <VCol v-for="(item, index) in cards" :key="index" cols="4" md="2"
                class="flex flex-col text-center m-8 md:px-2 md:py-28 sm:py-20 items-center md:w-1/3 bg-pm bg-opacity-10 hover:bg-pm hover:text-white hover:fill-white">
                <div class="w-full text-white">
                    <img :src="item.src" class="hover:w-24 md:w-20 sm:w-16 mx-auto mb-12" alt="">
                </div>
                <div class="font-serif mx-auto md:font-bold">
                    {{ item.title }}
                </div>
            </VCol>
        </VRow>
</template>

<script>
import vector from '../assets/images/Home/about/AboutSI.png'
import fish from '../assets/images/Home/about/fish.png'
import milk from '../assets/images/Home/about/cow.png'
import chicken from '../assets/images/Home/about/chicken-2-svgrepo-com.png'
import storage from '../assets/images/Home/about/14918076621578629624.png'
export default {
    components: {
    },
    data() {
        return {
            vector,
            title: 'Farm Ecology Products',
            para: 'Farm ecology products are a type of agricultural input that is designed to improve the health and productivity of soil and crops.They can be used to reduce the use of synthetic fertilizers and pesticides, and to improve the sustainability of agricultural production.',
            cards: [
                { title: 'Abattoir & Milk', src: milk, flex: 3 },
                { title: 'Poultry feed', src: chicken, flex: 3 },
                { title: 'Safe  Storage', src: fish, flex: 3 },
                { title: 'Fishery', src: storage, flex: 3 },
            ],

        }
    }
}
</script>

