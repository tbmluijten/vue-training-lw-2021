<template>
    <div>
        <h1>About Page</h1>
        <div id="user-list">
            <UserList :allUsers="deelnemers"/>
        </div>
    </div>
</template>

<script>
import UserList from "@/components/Users.vue"
import VcButton from "@/components/Button.vue"

export default {
    name: 'Home',
    components: {
        VcButton,
        UserList
    },
    data(){
        return  {
            name: 'Tom',
            idCount: 6,
            newUser: '',
            newFunction: '',
            deelnemers: []
        }
    },
    methods: {
        getAllDeelnemers(){
          let api = 'http://dump.lwdev.nl/vue-cursus-api/deelnemers/'
          this.axios.get(api).then((response) => {
            console.log(response.data)
            this.deelnemers = response.data;
          })
        }
    },

    created(){
      console.log('called')
      this.getAllDeelnemers();
    }
}
</script>