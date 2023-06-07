import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore('posStore', {
    state: () => ({
        searchPos: ref(''),
        dataPos: ref([]),
        catePos: ref('ALL'),
        popup: ref([]),
        handlePopup: ref(false)
    }),
    getters: {
        cate() {
            return this.dataPos
        }
    }
})