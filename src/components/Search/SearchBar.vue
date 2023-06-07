<template>
  <div class="mx-32 py-8">
    <div class="bg-white w-fit rounded-md p-1">
        <form @submit.prevent="handleSubmit" action="">
            <input v-model="search" class="focus:outline-none px-4 w-96 py-2" type="text" placeholder="Search all product here...">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 duration-300 px-8 rounded-md py-2 font-semibold text-white">Serach</button>
        </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {usePostStore} from '../../stores/PosStore'

export default {
    setup() {
        const search = ref('')
        const PosStore = usePostStore()

        const handleSubmit = () => {
            PosStore.searchPos = search.value
        }

        return {search, PosStore, handleSubmit}
    }
}
</script>