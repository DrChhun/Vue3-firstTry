<template>
    <div class="bg-white shadow-md p-2 h-full rounded-md">
        <img class="object-cover h-64 w-full rounded-md" :src="image" alt="">
        <div class="mt-4 space-y-2">
            <h2 class="line-clamp-2">{{name}}</h2>
            <p>${{price}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'price', 'image']
}
</script>

<style>

</style>