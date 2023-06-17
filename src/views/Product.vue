<template>
    <div>
        <div class="text-left text-text mt-6 ml-28">
               <breadcrumb link="Product"/>
        </div>
        <div class="flex text-pm md:text-5xl sm:text-xl font-bold justify-center">
            <img :src="vector" class="md:mx-4 sm:mx-2 md:w-auto sm:w-8" alt="">
            <h2>
                Products
            </h2>
        </div>
        <div>
            <VRow
                class="md:flex md:justify-center border-2 bg-white border-zinc-300 rounded-full md:mx-64 md:my-16 sm:mx-12 sm:my-6">
                <VCol v-for="(category, index) in categories" :key="index" class="text-center md:p-4 font-sans">
                    <div @click="selectcategories(index)">
                        <h6 class="cursor-pointer active:text-pm hover:text-pm md:text-lg sm:text-xs">{{ category }}</h6>
                    </div>
                </VCol>
            </VRow>
            <img :src="vec1" class="md:flex sm:hidden absolute z-0 w-28 right-0" alt="">
            <VRow class="mx-12 md:p-16 sm:p-2 shadow-lg mt-4 z-10 shadow-gray-300 md:rounded-3xl sm:rounded-2xl bg-white">
                <VCol v-for="(item, index) in filterproducts" :key="index" cols="6" md="4" class="md:relative text-center">
                    <div class="md:relative">
                        <img :src="item.img" alt="" class="mx-auto">
                        <h1
                            class="md:absolute bottom-0 bg-white md:px-6 text-sn left-0 md:py-4 md:text-lg sm:text-xs sm:px-3 md:font-bold">
                            {{ item.name }}</h1>
                    </div>
                </VCol>
                <!-- <pagination :totalPages="3" :perPage="6" :currentPage="currentPage" @pagechanged="onPageChange" /> -->
            </VRow>
            <div class="md:relative mb-20">
                <!-- <img :src="vec2" class="absolute z-0 w-28 right-0" alt=""> -->
            </div>
        </div>
    </div>
</template>
<script>
// import Pagination from '../components/Paginate.vue'
import vector from '../assets/images/Home/Product/18109616951678726864 1.png'
import p3 from '../assets/images/Products/Rectangle 28 (2).png'
import p1 from '../assets/images/Products/Rectangle 28 (3).png'
import p2 from '../assets/images/Products/Rectangle 28.png'
import vec1 from '../assets/images/Products/Ellipse 9.png'
import vec2 from '../assets/images/Products/Ellipse 10.png'
import breadcrumb from '../components/breadcrumb.vue'
export default {
    components: { breadcrumb },
    data() {
        return {
            currentPage: 1,
            vector,
            vec2,
            vec1,
            categories: [
                'All',
                'Animal Feed',
                'Dairy',
                'Farm',
                'Abattoir',
                'Poultry',
            ],
            products: [
                { name: 'Coffee Farm', img: p1, cate_id: 1 },
                { name: 'Fishery', img: p2, cate_id: 2 },
                { name: 'Egg', img: p3, cate_id: 3 },
                { name: 'Egg', img: p3, cate_id: 4 },
                { name: 'Coffee Farm', img: p1, cate_id: 5 },
                { name: 'Fishery', img: p2, cate_id: 5 },
            ],
            selectcategory: '',
        }
    },
    methods: {
        selectcategories: function (id) {
            this.selectcategory = id;
            console.log(this.selectcategory)
            // },
            // onPageChange(page) {
            //     console.log(page)
            //     this.currentPage = page;
        }
    },
    computed: {
        filterproducts: function () {
            if (this.selectcategory == 0 && this.selectcategory == '') {
                return this.products;
            }
            return this.products.filter((item) => item.cate_id == this.selectcategory)
        }
    }
}
</script>

<style scoped>
.body {
    background: linear-gradient(to right,
            white 0%,
            white 80%,
            #ED8E26 80%,
            #ED8E26 100%);
}
</style>

