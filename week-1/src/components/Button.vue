<template>
    <div>
        <router-link to="/about" class="vc-btn">Naar about</router-link>
    </div>
</template>

<script>
    export default{ 
        name: "VcButton"
    }
</script>

<style lang="scss">
    .vc-btn{
        padding: 4px 8px;
        background-color: orange;
        color: white;
        border-radius: 4px;
    }
</style>