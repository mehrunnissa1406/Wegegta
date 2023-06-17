<template>
     <div class="text-left text-text md:mt-6 md:ml-28">
               <breadcrumb link="Contact us"/>
        </div>
    <div class="md:mx-20 mb-20 mt-10 sm:mx-10 shadow-lg md:shadow-gray-300 md:rounded-3xl flex contact">
        <VRow class="md:px-20 md:py-28">
            <VCol cols="12" md="6" class="text-left sm:bg-white md:bg-transparent md:space-y-10 sm:space-y-5">
                <div class="md:text-4xl sm:text-2xl font-bold font-sans">Get in <span class="text-pm">Touch</span></div>
                <p class="md:font-bold md:text-lg sm:text-sm">{{ p1 }}</p>
                <v-form v-model="valid">
                    <v-container>
                        <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Name *"
                            required></v-text-field>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail "></v-text-field>
                        <v-text-field v-model="phone" :rules="nameRules" :counter="10" label="Phone Number *"
                            required></v-text-field>
                        <v-select v-model="reason" :items="items" :rules="nameRules" :counter="10"
                            label="How did you find us?" required>
                        </v-select>
                        <div class="d-flex flex-column">
                            <v-btn class="mt-4 bg-pm text-white font-bold" block>
                                Send
                            </v-btn>
                        </div>
                    </v-container>
                </v-form>
                <VRow class="font-serif">
                    <img :src="icon1" class="md:h-8 md:mx-3 sm:mx-2 sm:h-6" alt="">
                    <div class="md:text-sm sm:text-xs">
                        <h5>PHONE</h5>
                        <span class="text-pm">+25190000000</span>
                    </div>
                    <img :src="icon2" class="md:h-8 md:mx-3 sm:mx-2 sm:h-6" alt="">
                    <div class="md:text-sm sm:text-xs">
                        <h5>FAX</h5>
                        <span class="text-pm">+25190000</span>
                    </div>
                    <img :src="icon3" class="md:h-8 md:mx-3 sm:mx-2 sm:h-6" alt="">
                    <div class="md:text-sm sm:text-xs">
                        <h5>EMAIL</h5>
                        <span class="text-pm">info@wegegta.com</span>
                    </div>
                </VRow>
            </VCol>
            <VCol cols="12" md="6" class="">
                <img :src="map" class="sm:w-100 sm:h-auto md:w-auto" alt="">
            </VCol>
        </VRow>
    </div>
</template>
<script>
import icon1 from '../assets/images/Contact/Frame 831.png'
import icon2 from '../assets/images/Contact/Frame 835.png'
import icon3 from '../assets/images/Contact/Frame 833.png'
import map from '../assets/images/Contact/Screenshot 2023-05-09 155940 1.png'
import breadcrumb from '../components/breadcrumb.vue'
export default {
    components: { breadcrumb },
    data() {
        return {
            icon1,
            icon2,
            icon3,
            map,
            h1: 'Get in Touch',
            p1: 'Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.',
            valid: false,
            firstname: '',
            phone: '',
            reason: '',
            items: [
                'From a friend',
                'Social Media',
                'Community',
                'Personally Knows',
                'Others',
            ],
            nameRules: [
                value => {
                    if (value) return true

                    return 'Name is requred.'
                },
                value => {
                    if (value?.length <= 10) return true

                    return 'Name must be less than 10 characters.'
                },
            ],
            email: '',
            emailRules: [
                value => {
                    if (/.+@.+\..+/.test(value)) return true

                    return 'E-mail must be valid.'
                },
            ],

        }
    },
}
</script>

<style scoped>
.contact {
    background: linear-gradient(to right,
            #EEEDE7 0%,
            #EEEDE7 70%,
            #ED8E26 70%,
            #ED8E26 100%);
}
</style>