<template>
    <div>
        <p>{{web}}</p>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data () {
            return {
                web:null
            }
        },
        mounted () {
            var that=this
            axios.get('http://localhost:8000/greeting')
                .then(function (response) {
                    that.web=response.data.content
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                });
        }
    }
</script>

<style module>

</style>
