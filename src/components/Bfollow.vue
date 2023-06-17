<template>
    <div class="text-left ml-2">
        <div class="space-y-12 border-l-8 pl-2 rounded border-pm text-pm">
            <h1 class="font-bold py-2">Follow us</h1>
        </div>
        <VRow class="py-8 pl-4 space-x-6"><img :src="icon1" alt="">
            <img :src="icon2" alt="">
            <img :src="icon3" alt="">
            <img :src="icon4" alt="">
        </VRow>
        <div class="text-left text-pm mt-4">
            <div class="border-l-8 pl-2 rounded border-pm py-3 mb-3">
                <h1 class="font-bold">{{ h1 }}</h1>
            </div>
            <p class="pl-4">{{ p1 }}</p><br>
        </div>
        <form action="" class="border flex mr-2 p-1 justify-center">
            <input type="text" class="w-60 p-5" value="Enter your email">
            <button class="bg-pm p-5">
                <div class="text-white text-sm">Subscribe</div>
            </button>
        </form>
        <img :src="banner" class="my-10" alt="">
        <div class="relative">
            <img :src="farm" alt="" class="mx-auto">
            <div class="">
            <h1 class="absolute bottom-0 backdrop-blur-sm w-100 py-4 pl-8 text-white">The Dairy Farm</h1>
            </div>
        </div>
        <div class="text-left text-pm mt-4">
                <div class="border-l-8 pl-2 rounded border-pm py-3 mb-3">
                    <h1>Tags</h1>
                </div>
            </div>
            <VRow class="">
                <div v-for="(tag , index) in tags" :key="index" class="mt-6 mx-2">
                    <h5 class="bg-orange-200 text-black rounded-full p-2 text-center">{{ tag }}</h5>
                </div>
            </VRow>
    </div>
</template>
<script>
import icon1 from '../assets/images/Blog/twitter (4).png'
import icon2 from '../assets/images/Blog/twitter (3).png'
import icon3 from '../assets/images/Blog/twitter (2).png'
import icon4 from '../assets/images/Blog/twitter.png'
import banner from '../assets/images/Blog/Rectangle 37.png'
import farm from '../assets/images/Blog/Rectangle 38.png'
export default {
    data() {
        return {
            icon4,
            icon3,
            icon2,
            icon1,
            banner,
            farm,
            h1: 'Newsletter',
            p1: 'Get all the latest contents delivered a few times a month. ',
            tags:[
                'Neutral',
                'Entrepreneurship',
                'News',
                'Export',
                'Animal feed',
                'Poultry',
                'Leather',
                'Dairy',
            ],
        }
    }
}
</script>