<template>
    <div class="md:max-w-6xl md:space-y-6 px-5 mx-auto md:mt-70 text-center">
        <img :src="vector" class="w-10 mx-auto" alt="">
        <h2 class="text-sn md:text-4xl sm:text-lg sm:mb-4 font-bold text-center">
            {{ h1 }}
        </h2>
        <p class="md:mx-56 font-serif flex text-left">{{ p1 }}</p>
    </div>
    <VRow class="md:mx-12 sm:mx-24 md:mt-28 sm:mt-12 justify-center">
        <VCol class="border mx-6 text-text sm:mb-6 md:mb-0" v-for="(card, index) in cards" :key="index">
            <router-link to="/venture"><VSheet class="px-6 py-6 sm:space-y-2 md:space-y-2">
                <img :src="card.image" class="flex flex-col mb-6 sm:w-36 mx-auto md:w-auto" alt="">
                <h1 class="font-bold opacity-80 font-serif text-text md:text-xl sm:text-sm">{{ card.heading }}</h1>
                <p class="font-serif sm:text-xs md:text-sm">{{ card.subHeading }}</p>
            </VSheet>
            <div class="md:hidden flex justify-between pt-4 sm:w-full hover:text-white hover:bg-pm border-t-2 border-b-0 text-text ">
                    <h1 class="">Read More
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="w-6 h-6">
                        <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                    </svg>
                </div>
                </router-link>
        </VCol>
    </VRow>
    <VRow class="mx-12 sm:hidden md:flex">
        <VCol order="1" class="border hover:text-white pb-6 hover:bg-pm border-t-2 border-l-2 border-b-0 mx-6 text-text"
            v-for="(card, index) in cards" :key="index">
            <router-link to="/venture"><div class="flex justify-between items-center">
                <h1 class="">Read More
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="w-6 h-6">
                    <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div></router-link>
        </VCol>
    </VRow>
</template>
<script>
import vector from '../assets/images/Home/Venture/2287847421639478750 1.png'
import cow from '../assets/images/Home/Venture/features-icon-img-1.png'
import machine from '../assets/images/Home/Venture/features-icon-img-2.png'
import hen from '../assets/images/Home/Venture/features-icon-img-3.png'
export default {
    data() {
        return {
            vector,
            h1: ' Our Business Venture',
            p1: 'A business venture is a new business or business activity, especially one that involves risk.Business ventures can be started by individuals, groups, or organizations.They can be small or large, and they can operate in a variety of industries.',
            cards: [
                { heading: 'The Best Animal Ingredient ', subHeading: 'we have the best animal nutrition ingredient to all our customers around the country.', image: cow },
                { heading: 'The Best Farm Equipment ', subHeading: 'We provide the greatest farm equipment and machinery to all of our customers throughout the country.', image: machine },
                { heading: 'The Best Chicken & Egg ', subHeading: 'we have the best Poultry meat and egg production to distribute to every corner.', image: hen },
            ],
        }
    }
}
</script>