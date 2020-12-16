<template>
    <div id="previewimage" class="container-fluid text-center mt-3">
        <p style="color:#0075ff" class="mb-3">Preview Image</p>
        <div v-if="!image">
            <input type="file" class="form-control" @change="onFileChange">
        </div>
        <div v-else>
            <img class="my-2 img-fluid" :src="image" >
            <button class="mb-2 btn btn-danger" @click="removeImg">Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PreviewImage',
        data(){
            return{
                image:''
            }
        },
        methods:{
            onFileChange:function(e){

            //เรียกดูชื่อไฟล์ทีถูกเลือก
            // console.log(e.target.files); 

            // เก็บชื่อไฟล์ไว้ในตัวแปร
            var files = e.target.files

            //ถ้าไม่มีไฟล์ ให้หยุดการทำงาน
            if(!files.length)
            return
            this.createImg(files[0]);
        },
        //กรองเฉพาะไฟล์รูปภาพเท่านั้น
        createImg(files){
            // อ่านไฟล์รูปภาพ การโหลดไฟล์
            var reader = new FileReader();
            reader.onload=(e) =>{
                this.image = e.target.result;
            }
            reader.readAsDataURL(files)
            console.log(this.image);
        },
        removeImg(){
            this.image='';
        }
        }
    }
</script>

