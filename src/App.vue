<template>
  <h1>Rick and Morty</h1>
  <FilterByStatus />
  <FilterByName />
  <ListCharacters />
</template>

<script>
import ListCharacters from '@/components/ListCharacters.vue';
import FilterByStatus from '@/components/FilterByStatus.vue';
import FilterByName from '@/components/FilterByName.vue';

export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  }
}
</script>

<style lang="scss">
:root {
  --background-body: #24282F;
  --background-card: #2E333E;
  --text-white: #fff;
  --text-gray: #B3B3B3;
  --text-orange: #FFA500;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--background-body);
  color: var(--text-white);
}

h1 {
  margin: 20px 0;
  text-align: center;

}

.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}

img {
  width: 100%;
}
</style>
