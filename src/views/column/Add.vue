<template>
  <div class="management">
     <h1>栏目添加</h1>

        <!-- vuex  -->
      <p>{{$store.state.newName}}</p>
      <p>{{$store.state.Authorization}}</p>
  </div>

</template>
<script>
// @ is an alias to /src

export default {
  name: "Management",
  components: {

  },
  data() {
    return {
     
    };
  },
  methods: {
    
  }
};
</script>