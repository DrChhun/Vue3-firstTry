<template>
    <div class="mx-32 py-8 flex gap-4">
        <div @click="handleClick(x.name)" :class="{'!bg-blue-500 !text-white': PosStore.catePos === x.name}" class="cursor-pointer flex bg-white text-black hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md font-semibold" v-for="x in cateArr" :key="x">
            {{x.name}}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import {usePostStore} from '../../stores/PosStore'

export default {
    setup() {
        const PosStore = usePostStore()
        const cateArr = ref([
            {name: `ALL`},
            {name: `men's clothing`}, 
            {name: `jewelery`}, 
            {name: `electronics`},
            {name: `women's clothing`
        }])

        const handleClick = (name) => {
            PosStore.catePos = name
        }

        return {PosStore, cateArr, handleClick}
    }
}
</script>