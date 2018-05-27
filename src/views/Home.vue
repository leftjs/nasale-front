<template>
  <div class="home">

    <Project></Project>
    <Project></Project>
    <Project></Project>
    <Project></Project>
    <Project></Project>
    <Project></Project>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project";

export default {
  name: "home",
  components: {
    Project
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
