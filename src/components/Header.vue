<template>
<nav class="">
    <div class="flex justify-between">
        <div class="flex pt-2 xl:mx-28 lg:mx-28 md:mx-10">
            <img :src="logo" alt="logo" />
        </div>
        <!-- Mobile Menu -->
        <div class="flex mt-10 md:hidden">
            <img :src="vector" class="w-6 h-6 mx-10 cursor-pointer" @click="showmenu()" alt="logo">
            <div v-if="menu" class="fixed top-0 left-0 left-24 pt-10 bottom-0 right-0 bg-white">
                <div class="ml-16 mb-10 w-12 flex">
                    <img :src="logo" alt="logo" />
                    <div class="ml-56" @click="showmenu()">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div class="space-x-12 my-4 active:text-pm" v-for="(link, index) in links" :key="index">
                    <router-link :to="`${link.link}`" class="active:text-pm hover:text-pm font-medium color-text mx-20">{{ link.title
                    }}</router-link>
                </div>
                <h5 class="mx-16 text-pm text-2xl font-serif mt-6">Contact Info</h5>
                <div class="flex items-center text-sn space-x-2 ml-16 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                        Addis Abada
                    </div>
                </div>
                <div class="flex items-center text-sn space-x-2 ml-16 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                        +2590898909
                    </div>
                </div>
                <div class="flex items-center text-sn space-x-2 ml-16 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                        Contact@wegegta.com
                    </div>
                </div>
            </div>
        </div>
        <!-- DeskTop Menu -->
        <div class="hidden mt-10 mr-28 space-x-12 md:flex">
            <div class="space-x-12 active:text-pm" v-for="(link, index) in links" :key="index">
                <router-link :to="`${link.link}`" class="active:text-pm hover:text-pm font-medium color-text">{{ link.title
                    }}</router-link>
            </div>
            <div class="flex">
                <img :src="phone" class="bg-pm rounded-full p-2 w-10 h-10 md:w-10" alt="logo">
                <h4 class="hover:text-pm font-medium color-text pt-1 mx-2">+25190000000</h4>
            </div>
            <div id="menu-activator">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 hover:text-pm">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

                <!-- <img :src="globe" class="w-8 h-8 hover:color-pm" alt="logo"> -->
            </div>
            <VMenu activator="#menu-activator">
                <VList>
                    <VListItem v-for="(item, index) in items" :key="index" :value="index">
                        <VListItemTitle><img :src="item.icon" alt=""></VListItemTitle>
                    </VListItem>
                </VList>
            </VMenu>
        </div>

    </div>
</nav>
</template>

<script>
import logo from '../assets/images/Home/header/headerlogo.png'
import phone from '../assets/images/Home/header/fluent_call-16-filled.png'
import globe from '../assets/images/Home/header/globe.png'
import vector from '../assets/images/Home/header/Vector.png'
import Eng from '../assets/images/Home/header/Eng.png'
import Amh from '../assets/images/Home/header/Amh.png'
import { ref } from 'vue'
export default {
    components: {},
    setup() {
        let menu = ref(false)

        function showmenu() {
            return menu.value = !menu.value
        }
        return { showmenu, menu }
    },
    data() {
        return {
            logo,
            phone,
            globe,
            vector,
            items: [
                { icon: Eng },
                { icon: Amh },
            ],
            links: [
                { title: 'Home', link: '/' },
                { title: 'About', link: '/about' },
                { title: 'Venture', link: '/venture' },
                { title: 'Products', link: '/product' },
                { title: 'Blog', link: '/blog' },
                { title: 'Contact Us', link: '/contact' },
            ],
        }
    }
}
</script>
