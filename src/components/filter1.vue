<template>
  <div>
    {{ msg | msgFormat("疯狂+1", "123") | test}}
  </div>
</template>
<script>
export default {
  name: "filter1",
  data() {
    return {
      msg: "我曾经是一个单纯的少年，单纯的我，傻傻的问，谁是这个世界上最单纯的少年？"
    };
  },
  methods: {},
};
</script>
<style></style>
