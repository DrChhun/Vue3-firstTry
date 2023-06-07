<template>
  <div @click="handleClick" class="fixed flex items-center justify-center !bg-black/50 w-full h-screen"></div>
    <div class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" v-if="PosStore.popup.value.length">
        <div v-for="x in PosStore.popup.value" :key="x.price" class="relative p-12 space-y-4 rounded-md max-w-2xl bg-white shadow-md">
            <img class="!h-64 mx-auto" :src="x.image" alt="">
            <h2 class="font-semibold">Title: {{x.title}}</h2>
            <p>Description: {{x.description}}</p>
            <p class="text-green-600 font-semibold">Price: ${{x.price}}</p>
            <CartBar :image="x.image" :title="x.title" :description="x.description" :cost="x.price" />
        </div>
    </div>
    <div v-else class="bg-white h-fit">
        <p>No Data</p>
    </div>
</template>

<script>
import {usePostStore} from '../../stores/PosStore'
import { defineComponent } from 'vue';
import CartBar from '../../components/Cart/CartBar.vue'

export default defineComponent ({
    components: {
        CartBar
    },
    setup(props, {emit}) {
        const PosStore = usePostStore()

        const handleClick = () => {
            emit('bg-event', false)
        }

        return {PosStore, handleClick}
    }

})
</script>