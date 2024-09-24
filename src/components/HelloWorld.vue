<template>
  <div>
    <h1 style="text-align: center; margin-top: 50px; margin-top: 50px">Recipes</h1>
    <div class="grid-container" style="margin-bottom: 50px">
      <div
        class="card grid-item"
        v-for="entry in recipesData?.recipesCollection?.items"
        :key="entry.title"
      >
        <img :src="entry.image.url" alt="Denim Jeans" style="width: 100%" />
        <h4 style="font-weight: bold">{{ entry.title }}</h4>
        <p style="font-size: 20px">
          {{ entry.description }}
        </p>
      </div>
    </div>

    <h1 style="text-align: center">Automobiles</h1>
    <div
      class="card"
      v-for="entry in autoData"
      :key="entry.sys.id"
      style="margin-bottom: 50px; margin-top: 50px"
    >
      <SlideShow :images="entry.fields.images"></SlideShow>
      <h1>{{ entry.fields.vehicleName }}</h1>
      <p>
        {{ entry.fields.aboutVehicle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchEntries, fetchAssets } from '@/services/contentfulSdk'
import SlideShow from './SlideShow.vue'
import { fetchContentfulData } from '@/services/graphQlAPI'
import { fetchDataFromContentful } from '@/services/restAPI'

const recipesData = ref<any[]>([])
const autoData = ref<any[]>([])

onMounted(async () => {
  // recipesData.value = await fetchEntries('recipes')
  autoData.value = await fetchEntries('automobiles')
  recipesData.value = (await fetchContentfulData()) as any[]
  console.log(recipesData.value, autoData.value)
  await fetchDataFromContentful()
  await fetchAssets()
})
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 500px;
  /* margin: auto; */
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
