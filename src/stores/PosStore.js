import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore('posStore', {
    state: () => ({
        searchPos: ref(''),
        dataPos: ref([]),
        catePos: ref('ALL'),
        popup: ref([]),
        cart: ref([]),
        handlePopup: ref(false),
        test: ref('x')
    }),
    getters: {
        cate() {
            return this.dataPos
        },
        total() {
            return this.cart.reduce((sum, x) => sum + x.price, 0)
        }
    },
    actions: {
        addObject(object) {
            this.cart = [...this.cart, object]
        }
    }
})