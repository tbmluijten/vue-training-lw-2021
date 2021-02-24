<template>
    <div>
        <div class="user" v-for="item in filterItems" :key="item.id" @click="$emit('userDetails', item.id)">
          <div class="name">{{item.naam}}</div>
          <div class="function">{{item.afdeling}}</div>
          <div class="function">{{item.id}}</div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Users",
        props: {
            filterItems: Array
        }
    }
</script>

<style lang="scss" scoped>
.user{
  width: 100%;
  border: solid 1px orange;
  border-left: solid 4px orange;
  padding: 16px;
  text-transform: uppercase;
  padding-bottom: 48px;
  margin-bottom: 16px;
  .name{
    font-size: 24px;
    color: black;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .function{
    color: black;
    font-weight: 16px;
  }
}
</style>