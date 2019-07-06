<template>
  <div class="App">
    <div>
      <router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
    </div>
    <div>
      <p>{{getCounter}}</p>
      <button @click="add">add</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getCounter'])
  },

  methods: {
    ...mapActions(['add'])
  }
};
</script>

<style lang="scss" scoped>
@import './assets/styles/var.scss';
.App {
  text-align: center;
  color: $primary-color;
  font-size: 28px;
}
</style>