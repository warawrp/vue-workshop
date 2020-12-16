<template>
    <div id="limitmessage" class="container-fluid text-center mt-3">
        <p style="color:#0075ff" class="mb-3">Limit Message</p>
        <div class="input-group">
            <div class="input-group-append">
                <span class="input-group-text" v-text="datamax-message.length">20</span>
            </div>
            <input type="text" class="form-control" v-model="message" :maxlength="datamax">
        </div>
    </div>
</template>

<script>
    export default {
        name:'LimitMessage',
        data(){
            return{
                message:'',
                datamax:20,
            }
        }
    }
</script>

