<template>
    <div class="flex space-x-4">
        <div class="space-x-4">
            <button @click="unit--">-</button>
            <input :value="unit" type="text" class="text-center py-1 border-2 border-gray-200 rounded-md bg-gray-100" placeholder="Add Unit">
            <button @click="unit++">+</button>
        </div>
        <button @click="handleAddToCart" class="bg-blue-500 text-white px-4 font-semibold duration-300 hover:bg-blue-600 rounded-md border-2 border-blue-500">Add To Cart</button>
    </div>
</template>

<script>
import { ref } from 'vue'
import {usePostStore} from '../../stores/PosStore'

export default {
    props: ['image', 'title', 'description', 'cost'],
    setup({image, title, description, cost}) {
        const PosStore = usePostStore()

        const unit = ref(1)

        const handleAddToCart = () => {
            let price = cost * unit.value
            PosStore.addObject({image, title, description, price, unit})
            PosStore.test = 'ok'
        }

        return {PosStore, handleAddToCart, unit}
    }
}
</script>