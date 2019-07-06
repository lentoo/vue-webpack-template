<template>
  <div class="hello-world">
    hello-world1
    hello-world1
    <p>hello-world</p>
    <p>timer: {{conter}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello-world',

  data() {
    return {
      conter: 0
    };
  },
  created() {
    new Promise(res => {
      setTimeout(() => {
        res()
        console.log('sss');
      }, 1000)
    })
    console.log(Symbol('symbol'))
    setInterval(() => {
      this.conter++
    }, 100)
  }
};
</script>

<style lang="scss" scoped>
.hello-world {
  font-size: 20px;
  color: red;
}
</style>