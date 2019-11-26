<template>
  <div>

    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加商品</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          Id：
          <input type="text" class="form-control">
        </label>
        <label>
          Name:
          <input type="text" class="form-control">
        </label>
        <input type="button" value="添加" class="btn btn-primary">
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
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td v-text="item.name"></td>
          <td>{{ item.ctime }}</td>
          <td>
            <a href="">删除</a>
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
      list: [
        { id: 1, name: "奔驰", ctime: new Date() },
        { id: 2, name: "宝马", ctime: new Date() }
      ],
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>