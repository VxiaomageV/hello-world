<template>
  <div>
    <p v-for="(item,i) in list">{{ item }}---下标：{{i}}</p>
    <p v-for="(user, i) in users">名字:{{user.name}}---年龄:{{user.age}}---下标：{{i}}</p>
    <p v-for="(val, key, i) in user">{{ val }}----{{ key }}---{{ i }}</p>
    <p v-for="count in 3">这是第{{ count }}次循环</p>
    <div>
      姓名
      <input type="text" v-model="name" />;年龄:
      <input type="text" v-model="id" />
      <input type="button" value="添加" @click="add" />
      <p v-for="userl in userlist" :key="userl.id">
        <input type="checkbox" />
        {{ userl.id }}---{{ userl.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "fortest",
  data() {
    return {
      list: [1, 2, 3],
      users: [
        { name: "lihong", age: 32 },
        { name: "wangm", age: 12 },
        { name: "lanz", age: 22 }
      ],
      user: {
        name: "haha",
        age: 11,
        gender: "男"
      },
      userlist: [
        { name: "lihong", id: 1 },
        { name: "wangm", id: 2 },
        { name: "lanz", id: 3 }
      ],
      name: "",
      id: ""
    };
  },
  methods: {
    add() {
      this.userlist.unshift({ name: this.name, id: this.id });
    }
  }
};
</script>

<style scoped>
</style>