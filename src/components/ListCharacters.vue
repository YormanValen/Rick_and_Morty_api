<template>
  <div>
    <section>
      <div class="characters">
        <div
          class="characters__item"
          v-for="character in characters"
          ::key="character.id"
        >
          <CardCharacter :character="character" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import CardCharacter from "@/components/CardCharacter.vue";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

export default {
  components: {
    CardCharacter,
  },

  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });
    onMounted(() => {
      store.dispatch("getCharacters");
    });

    return {
      characters,
    };
  },
};
</script>
<style lang="scss">
.characters {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 6rem;
    margin: 3rem;
}
</style>
