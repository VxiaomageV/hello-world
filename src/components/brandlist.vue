<template>
  <div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加商品</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          Id：
          <input type="text" class="form-control" v-model="id" />
        </label>
        <label>
          Name:
          <input type="text" class="form-control" v-model="name" />
        </label>
        <!-- add() 添加（）后可以传参 -->
        <input
          type="button"
          value="添加"
          class="btn btn-primary"
          @click="add"
        />
        <label>
          搜索名称关键字:
          <input type="text" class="form-control" v-model="keywords" />
        </label>
      </div>
    </div>

    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ctime</th>
          <th>Operetion</th>
        </tr>
      </thead>
      <tbody>
        <!-- 之前从list获取 现改为search()方法动态得到过滤后的list-->
        <tr v-for="item in search(keywords)" :key="item.id">
          <td>{{ item.id }}</td>
          <td v-text="item.name"></td>
          <td>{{ item.ctime }}</td>
          <td>
            <a href="" @click.prevent="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "brandlist",
  data() {
    return {
      id: "",
      name: "",
      keywords: "",
      list: [
        { id: 1, name: "奔驰", ctime: new Date() },
        { id: 2, name: "宝马", ctime: new Date() }
      ]
    };
  },
  methods: {
    // 添加方法
    add() {
      this.list.unshift({
        id: this.id,
        name: this.name,
        ctime: new Date()
      });
    },
    // 删除方法
    del(id) {
      this.list.some((item, i) => {
        if (item.id == id) {
          this.list.splice(i, 1);
          return true;
        }
      });

      /* var index = this.list.findIndex(item => {
        if (item.id == id) {
          return true;
        }
        this.list.splice(index, 1);
      }); */
    },
    // 根据关键字擦护照
    search(keywords) {
      /* var newlist = [];
      this.list.forEach(item => {
        if (item.name.indexOf(keywords) != -1) {
          newlist.push(item);
        }
      });
      return newlist; */

      // forEach some filter findIndex 都是数组新方法 都会对数组遍历 执行相关操作
      return this.list.filter(item => {
        // ES6字符串新方法 是否包含 包含返回true 否则返回false
        if (item.name.includes(keywords)) {
          return item;
        }
      });
    }
  }
};
</script>

<style scoped></style>
