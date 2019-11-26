<template>
  <div>
    <input type="button" value="浪起来" @click="long" />
    <input type="button" value="稳住" @click="stop" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "paomadeng",
  data() {
    return {
      msg: "猥琐发育，别浪~~!",
      intervalId: null // 定义定时器id
    };
  },
  methods: {
    long() {
      // console.log(this.msg);
      // 定时器
      if (this.intervalId != null) {
        return;
      }
      this.intervalId = setInterval(() => {
        var start = this.msg.substring(0, 1);
        var end = this.msg.substring(1);
        this.msg = end + start;
      }, 400);
    },
    stop() {
      // 清除定时器
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
};
</script>

<style scoped>
</style>