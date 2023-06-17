<template>
    <div id="footer" class="md:pt-28 sm:pt-12 sm:mt-12 md:mt-0">
        <div class="md:ml-60 md:mr-0">
            <VRow class="text-center text-sn font-serif">
                <VCol cols="7" md="" class="bg-white">
                    <img :src="icon1" class="md:w-auto sm:w-56" alt="">
                </VCol>
                <VCol cols="7" md="" class="bg-white sm:pl-12 md:pl-0 sm:pt-2 md:pt-7">
                    <VRow>
                        <img :src="icon2" class="md:w-auto sm:w-12 sm:h-12 md:h-auto" alt="">
                        <div class="md:pl-4 md:mt-10 sm:pl-2 sm:mt-3 md:text-sm sm:text-xs">
                            {{ h1 }}
                        </div>
                    </VRow>
                </VCol>
                <VCol cols="7" md="" class="bg-white sm:pl-12 md:pl-0 sm:pt-8 md:pt-7">
                    <VRow>
                        <img :src="icon3" alt="" class="md:w-auto sm:w-12 sm:h-12 md:h-auto">
                        <div class="md:pl-4 md:mt-10 sm:pl-2 sm:mt-3 md:text-sm sm:text-xs">
                            {{ h2 }}
                        </div>
                    </VRow>
                </VCol>
            </VRow>
        </div>
        <div class="md:mx-auto sm:ml-8 sm:mt-10 md:sapce-x-12">
            <VRow class="flex md:mx-24 md:my-20 justify-between">
                <VCol cols="4" md="4" class="text-white">
                    <h1 class="md:text-3xl sm:text-lg mb-2">{{ h3 }}</h1>
                    <span class="md:text-lg sm:text-xs">{{ p1 }}</span>
                </VCol>
                <VCol cols="2" class="">
                    <h1 class="md:text-2xl sm:text-lg text-pm font-bold">Service</h1>
                    <h6 v-for="(item, index) in service" :key="index" class="md:my-2 md:text-lg sm:mb-1 sm:text-sm text-sans">
                        {{ item }}
                    </h6>
                </VCol>
                <VCol cols="4" md="3">
                    <h1 class="md:text-2xl sm:text-lg text-pm font-bold">Usefull pages</h1>
                    <h6 v-for="(item, index) in pages" :key="index" class="my-2 text-sans">
                        <router-link :to="item.link" class="cursor-pointer">{{ item.page }}</router-link>
                    </h6>
                </VCol>
            </VRow>
        </div>
    </div>
    <div class="md:relative bg-sn p-4 text-white justify-between">
        <VRow class="md:mx-24 sm:text-right md:text-left">
            <VCol>
                copyright © 2023
            </VCol>
            <VCol class="relative">
                <img :src="sm" alt="" class="md:flex sm:hidden absolute bottom-1 w-1/3 right-0">
            </VCol>
        </VRow>
    </div>
</template>
<script>
import icon3 from '../assets/images/Home/footer/Icon (2).png'
import icon2 from '../assets/images/Home/footer/Icon.png'
import icon1 from '../assets/images/Home/footer/photo_2023-05-11_11-36-13 1.png'
import sm from '../assets/images/Home/footer/SM.png'

export default {
    data() {
        return {
            icon3,
            icon2,
            icon1,
            sm,
            h1: 'We Use New Technology',
            h2: 'We Use New Technology',
            h3: 'About Us',
            p1: 'We are confident that you will be impressed with the quality of our products and the dedication of our staff.',
            service: [
                'Abattoir',
                'Dairy',
                'Fishery',
                'Poultry',
                'Animal Feed',
                'Safe Storage',
            ],
            pages: [
                { page: 'About', link: '/about' },
                { page: 'Venture', link: '/venture' },
                { page: 'Products', link: '/product' },
                { page: 'Blog', link: '/about' },
                { page: 'Contact us', link: '/contact' },
            ],
        }
    }
}
</script>

<style scoped>
#footer {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right,
            #ED8E26 0%,
            #ED8E26 40%,
            #fbfaf2 40%,
            #fbfaf2 100%);
}
</style>