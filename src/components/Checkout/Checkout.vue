<template>
    <div class="w-[20%] bg-white h-screen overflow-y-auto fixed py-12 flex flex-col justify-between px-8">
        <div>
            <h2 class="text-2xl font-bold">Order Details</h2>
            <hr class="my-4">
            <div class="space-y-8" v-if="PosStore.cart">
                <div class="flex" v-for="(x, index) in PosStore.cart" :key="index">
                    <img class="h-16 mr-8 w-16 object-cover" :src="x.image" alt="">
                    <div class="w-full">
                        <h2 class="font-semibold text-md line-clamp-2">{{x.title}}</h2>
                        <div class="flex justify-between">
                            <p class="text-slate-400 font-medium">{{x.unit}}x</p>
                            <p class="text-blue-600 font-medium">${{x.price.toFixed(1)}} <span @click="handleDelete(index)" class="text-red-600 ml-4 cursor-pointer">remove</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                empty
            </div>
        </div>
    </div>
    <div class="space-y-4 mt-4 p-8 bottom-0 fixed bg-white w-[20%]">
            <hr>
            <div class="flex justify-between">
                <p class="font-semibold text-slate-400">Subtotal</p>
                <p class="text-blue-600 font-semibold">${{PosStore.total.toFixed(1)}}</p>
            </div>
            <div class="flex justify-between">
                <p class="font-semibold text-slate-400">Discount sales</p>
                <p class="text-blue-600 font-semibold">$0.00</p>
            </div>
            <div>
                <div class="flex justify-between">
                    <p class="font-semibold text-slate-400">Total</p>
                    <p class="text-blue-600 font-semibold">${{PosStore.total.toFixed(1)}}</p>
                </div>
                <button class="bg-blue-500 hover:bg-blue-600 duration-300 text-white font-semibold w-full py-2 rounded-md mt-4">Pay Now</button>
            </div>
        </div>
</template>

<script>
import {usePostStore} from '../../stores/PosStore'

export default {
    setup() {
        const PosStore = usePostStore()

        const handleDelete = (index) => {
            //to remove specific element in array
            {index != 0 ? PosStore.cart.splice(index, index) : PosStore.cart.splice(0, 1)}
            console.log(PosStore.cart.splice(0, 0))
        }

        return {PosStore, handleDelete} 
    }
}
</script>