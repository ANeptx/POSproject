<template functional>
  <v-lazy-image :src="props.src" :src-placeholder="props.srcPlaceholder" alt="Periscope"></v-lazy-image>
</template>
<script>
export default {
  name: 'FadeImage'
}
</script>

<style scoped>
.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>
