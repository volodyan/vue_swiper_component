<template>
  <div class="hello">
   <component :is='"demo"'></component>
  </div>
</template>

<script>
import demo from "@/components/demo";
export default {
  name: "HelloWorld",
  components: {
    demo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
