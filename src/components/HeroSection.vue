<template>
    <main>
        <div class="flex bg-contain bg-no-repeat bg-relative bg-hero">
                <img :src="shape" class="flex md:w-1/2 w-80 sm:w-64 sm:m-0" alt="">
        </div>
    </main>
</template>
<script>
import shape from '../assets/images/Home/Hero/Shape.png'
export default {
    components: {
    },
    data() {
        return {
            shape
        }
    }
}
</script>
