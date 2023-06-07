<template>
    <div v-if="store.length">
        <div v-if="PosStore.catePos === 'ALL' " class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mx-32 gap-6 mb-16">
            <div  v-for="x in store" :key="x">
                <!-- @click="haneleCardClick(x.title, x.description, x.image, x.price)" -->
                <Card @click="sendEvent(x.title, x.description, x.image, x.price)" @showData="getData($event)" :name="x.title" :price="x.price" :image="x.image" />
                <p>{{result}}</p>
            </div>
        </div>
        <div v-if="PosStore.catePos === `men's clothing` " class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mx-32 gap-6 mb-16">
            <div  v-for="x in store.filter(x => x.category === `men's clothing`)" :key="x">
                <Card @click="sendEvent(x.title, x.description, x.image, x.price)" @showData="getData($event)" :name="x.title" :price="x.price" :image="x.image" />
                <p>{{result}}</p>
            </div>
        </div>
        <div v-if="PosStore.catePos === `jewelery` " class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mx-32 gap-6 mb-16">
            <div  v-for="x in store.filter(x => x.category === `jewelery`)" :key="x">
                <Card @click="sendEvent(x.title, x.description, x.image, x.price)" @showData="getData($event)" :name="x.title" :price="x.price" :image="x.image" />
                <p>{{result}}</p>
            </div>
        </div>
        <div v-if="PosStore.catePos === `electronics` " class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mx-32 gap-6 mb-16">
            <div  v-for="x in store.filter(x => x.category === `electronics`)" :key="x">
                <Card @click="sendEvent(x.title, x.description, x.image, x.price)" @showData="getData($event)" :name="x.title" :price="x.price" :image="x.image" />
                <p>{{result}}</p>
            </div>
        </div>
        <div v-if="PosStore.catePos === `women's clothing` " class="grid grid-cols-4 mx-32 gap-6">
            <div  v-for="x in store.filter(x => x.category === `women's clothing`)" :key="x">
                <Card @click="sendEvent(x.title, x.description, x.image, x.price)" @showData="getData($event)" :name="x.title" :price="x.price" :image="x.image" />
                <p>{{result}}</p>
            </div>
        </div>
    </div>
    <div class="mx-32" v-else>No product to show</div>

</template>

<script>
import Card from '../Card/Card.vue'
import {usePostStore} from '../../stores/PosStore'
import { defineComponent } from 'vue';
export default defineComponent ( {
    props: ['store'],
    components: {
        Card
    },
    setup(props, {emit}) {
        let result
        const PosStore = usePostStore()

        const haneleCardClick = (title, description, image, price) => {
            PosStore.popup = {title, description, image, price}
            PosStore.handlePopup = true
        }

        const state = true

        function sendEvent(title, description, image, price) {
            PosStore.popup.value = [{title, description, image, price}]
            emit('callHeroes', state)
        }

        const getData = (data) => {
            result = data
        }

        return {getData, result, PosStore, haneleCardClick, sendEvent}
    }
})
</script>

<style>

</style>