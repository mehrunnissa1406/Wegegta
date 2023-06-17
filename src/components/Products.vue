<template>
    <div class="max-w-6xl md:space-y-6 sm:space-y-2 md:px-5 md:mx-auto mt-70 text-center">
        <img :src="vector" class="md:w-14 sm:w-10 mx-auto" alt="">
        <h2 class="text-sn md:text-4xl sm:text-lg font-bold text-center">
            {{ h1 }}
        </h2>
        <p class="md:mx-72 sm:mx-20 sm:text-sm md:text-lg flex text-text text-left">{{ p1 }}</p>
    </div>
    <VRow class="md:mx-24 md:mt-16 sm:mx-20 sm:mt-10 sm:space-y-5 md:space-y-0 justify-center">
        <VCol order="1" class="border mx-6 text-text " v-for="(card, index) in cards" :key="index">
            <router-link to="/product"><VSheet class="px-6 py-6">
                <img :src="card.image" class="flex flex-col mb-6" alt="">
                <h1 class="text-center font-serif text-pm text-2xl">{{ card.heading }}</h1>
                <p class="font-serif text-sm">{{ card.subHeading }}</p>
            </VSheet></router-link>
        </VCol>
    </VRow>
</template>
<script>
import vector from '../assets/images/Home/Product/18109616951678726864 1.png'
import img2 from '../assets/images/Home/Product/Rectangle 11-1.png'
import img3 from '../assets/images/Home/Product/Rectangle 11-2.png'
import img1 from '../assets/images/Home/Product/Rectangle 11.png'
export default {
    data() {
        return {
            vector,
            h1: 'Featured Products',
            p1: 'We have produced and manufactured a lot of products under different venture and sectors. Here are the a few products below.',
            cards: [
                { heading: 'Meat', subHeading: 'We have the best abattoir and meat, and we send high-quality meat right to your house.', image: img1 },
                { heading: 'Chicken ', subHeading: 'We provide the greatest farm equipment and machinery to all of our customers throughout the country.', image: img2 },
                { heading: 'Animal Feed ', subHeading: 'we have the best Poultry meat and egg production to distribute to every corner.', image: img3 },
            ],
        }
    }
}
</script>