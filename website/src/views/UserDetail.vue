<template>
    <div>
        <div class="details">
            <div class="container">
                <div class="holder-details">
                    <div class="wrapper">
                        <div class="back">Terug</div>
                        <div class="title">Deelnemer details</div>
                        <div class="holder-details">
                            <div class="user-details">
                                <div class="label">NAAM</div>
                                <div class="label-data">{{this.users.naam}}</div>
                                <div class="label">AFdeling</div>
                                <div class="label-data">{{this.users.afdeling}}</div>
                                <div class="label">Persoonlijke tekst</div>
                                <div class="label-data">{{this.users.tekst}}</div>
                            </div>
                            <div class="user-media">
                                <img :src="this.users.img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "userDetail",
  data() {
    return {
      users: "",
    };
  },
  methods: {
    getUser() {
        console.log(this.$route.params.id)
        this.axios.post("http://dump.lwdev.nl/vue-cursus-api/deelnemerDetails/", {id: this.$route.params.id}).then((response) => {
            console.log(response)
            this.users = response.data;
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
    .details{
        padding-top: 140px;
        .container{
            .holder-details{
                .wrapper{
                    max-width: 660px;
                    margin: 0 auto;
                    padding: 24px;
                    background-color: white;
                }
            }
        }
    }
</style>