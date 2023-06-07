<template>
  <div class="home">
    <PopupCard @bg-event="handleEvent" v-if="popup"/>
    <SerachBar />
    <CategoryBar />
    <CardList @callHeroes="callHeroes" :store="matchName" />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import CardList from '../components/Card/CardList.vue'
import SerachBar from '../components/Search/SearchBar.vue'
import {usePostStore} from '../stores/PosStore'
import CategoryBar from '@/components/Category/CategoryBar.vue'
import PopupCard from '../components/Popup/PopupCard.vue'

export default {
  name: 'HomeView',
  components: {
    CardList,
    SerachBar,
    CategoryBar,
    PopupCard
  },
  setup() {
    const store = ref([])
    const PosStore = usePostStore()

    const load = async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      store.value = await res.json()
    }

    load()

    const popup = ref(false)

    function callHeroes() {
      popup.value = true
    }

    const handleEvent = () => {
      popup.value = false
    }

    PosStore.dataPos.value = store

    const matchName = computed(() => {
      return store.value.filter((x) => x.title.toLowerCase().includes(PosStore.searchPos.toLowerCase()))
    })

    return {matchName, popup, callHeroes, handleEvent}
  }
}
</script>
