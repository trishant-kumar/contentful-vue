<template>
  <div class="slideshow-container">
    <!-- Slideshow items -->
    <div
      v-for="(slide, index) in props.images"
      :key="index"
      class="slide"
      :class="{ active: currentIndex == index }"
    >
      <img :src="slide.fields.file.url" :alt="`Slide ${index + 1}`" class="slide-image" />
    </div>

    <!-- Navigation controls -->
    <a class="prev" @click="prevSlide">&#10094;</a>
    <a class="next" @click="nextSlide">&#10095;</a>

    <!-- Dots for navigation -->
    <div class="dots-container">
      <span
        v-for="(slide, index) in props.images"
        :key="index"
        class="dot"
        :class="{ active: currentIndex == index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  images: {
    type: [Array, Object],
    required: true
  }
})

const currentIndex = ref(0)

// Function to show the previous slide
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

// Function to show the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

// Function to go to a specific slide
const goToSlide = (index: number) => {
  currentIndex.value = index
}

// Optional: Auto-play functionality
let slideInterval: ReturnType<typeof setInterval>
onMounted(() => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
})
</script>

<style scoped>
.slideshow-container {
  position: relative;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
}

.slide {
  display: none;
}

.slide.active {
  display: block;
}

.slide-image {
  width: 100%;
  border-radius: 10px;
}

/* Previous & Next Buttons */
.prev {
  left: 0;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Dots (Indicators) */
.dots-container {
  text-align: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot.active {
  background-color: #717171;
}

.dot:hover {
  background-color: #717171;
}
</style>
