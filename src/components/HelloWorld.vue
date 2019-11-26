<template>
  <div class="hello">
    {{ hello }}
    {{ 1+1 }}
    {{ "哈哈" }}
    {{ 0< 10 ? '对的' : '错的' }}
    <div>
      <p>{{ msg }}</p>
      <p v-text="msgh"></p>
      <p v-html="msgh"></p>
      <input type="button" value="按钮" v-bind:title="mytitle" />
      <input type="button" value="按钮" :title="mytitle" />
      <input type="button" value="按钮2" v-on:click="show" />
      <input type="button" value="按钮2" @click="show" />
      <input type="text" v-model="hello" />
      <h1 :class="classStr">我是一个大大的H1</h1>
      <input type="button" value="flag" @click="flag=!flag"/>
      <h3 v-if="flag">我是一个vif</h3>
      <h3 v-show="flag">我是一个vshow</h3>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      hello: "Hello,VUE",
      msgh: "<h1>h1h1</h1>",
      mytitle: "自定义title",
      classStr: {red:true,thin:true,italic:false,active:true},
      flag: true,
    };
  },
  methods: {
    show: function() {
      alert("Hello");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  color: red;
}
.thin {
  font-weight: 200;
}
.italic {
  font-style: italic;
}
.active{
  letter-spacing: 0.5em;
}
</style>
