<template>
    <div class="md:ml-24 md:mr-10 md:my-8 border-t-2">
        <div class="text-black text-left">
            <breadcrumb link="Blog"/>
        </div>
        <h1 class="text-center sm:my-6 md:text-9xl sm:text-4xl font-bold text-pm">
            THE BLOG
        </h1>
        <VRow class="md:mt-10 sm:mt-2">
            <VCol cols="12" md="8" class="border-t-2">
            <Post/>
            </VCol>
            <VCol cols="4" class="hidden md:flex border-l-2 mt-8 p-4">
                <follow />
            </VCol>
            <VCol cols="12" class="mt-4 mb-1 md:hidden sm:flex">
                    <banner color="black"/>
            </VCol>
        </VRow>
    </div>
</template>

<script>
import follow from '../components/Bfollow.vue'
import Post from '../components/BPost.vue'
import breadcrumb from '../components/breadcrumb.vue'
import banner from '../components/Banner.vue'
export default {
    components: {
        follow,
        Post,
        banner,
        breadcrumb,
    },
}
</script>