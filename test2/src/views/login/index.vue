<template>
    <div>
        <a @click="login">99999999999</a>
        <br>
        <button v-on:click="login">111</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            login: function(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>

</style>