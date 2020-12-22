<template>
    <div id="ajex" class="container-fluid mt-3">
        <p style="color: #0075ff;" class="mb-3 text-center">Ajax Asynchronous JavaScript And XML</p>
        <div class="row text-center">
            <div class="col-12">
                <p>Data retrieved from <a href="https://en.wikipedia.org/wiki/Albert_Einstein" target="_blank"></a>Wikipedia</p>
            </div>
            <div class="col-12">
                <img style="border-radius:6px" class="mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg" alt="Einstein">
            </div>
            <div class="col-12">
                <button id="request" class="btn-primary my-2" >Learn more about Einstein</button>
            </div>
            <div class="col-12">
                <div id="bio"></div>
            </div>
        </div>
    </div>
</template>

<script>
    // const btn = document.querySelector("#request");
    // const bio = document.querySelector("#bio");
    // const request = new XMLHttpRequest();
    export default {
        name: 'Ajax',
        data(){
            return{

            }
        },
        methods:{
        }
    }
</script>

<style lang="css" scoped>

</style>