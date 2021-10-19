<template>
  <div class="grid">
    <div class="item" v-for="(game, index) in games" :key="index">
      <h2>{{ game.name }}</h2>
      <div>
        <img
          width="100"
          height="100"
          :src="getPreview(game.media).url"
          alt=""
        />
      </div>
      <div>Price: {{ game.price.basePrice }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  mounted() {
    this.getAllGames({});
  },

  methods: {
    ...mapActions(["getAllGames"]),
    getPreview(medias) {
      const preview = medias.find(media => ["IMAGE"].includes(media.type));
      return preview ? preview : {};
    }
  },

  computed: {
    ...mapGetters(["games"])
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
}

.item {
  /* border: 1px solid #000; */
}
</style>
