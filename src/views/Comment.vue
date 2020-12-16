<template>
    <div id="comment" class="container-fluid text-center mt-3">
        <p style="color: #0075ff;" class="mb-3">Comment</p>
        <div class="row">
            <div class="col-md-12">
                <div class="card mb-2" v-for="message in messages" :key="message.id">
                    <div class="card-body text-left ">
                        <p class="card-title" v-if="message != editComment">{{message.comment}}</p>
                        <textarea v-else name="comment" class="form-control mt-2" v-model="messageText"></textarea>
                        <p style="margin:0" class="card-text text-muted">{{message.name}}</p>
                        <!-- <p class="card-text text-muted">{{message.id}}</p> -->
                        <div v-if="message != editComment">
                            <div class="edit" @click.prevent="editMessage(message)"><i class="fa fa-eraser"></i></div>
                            <div class="delete" @click.prevent="deleteMessage(message)"><i class="fa fa-minus-circle"></i></div>
                        </div>
                        <div v-else>
                            <div class="update" @click.prevent="updateMessage()"><i class="fas fa-check-circle"></i></div>
                            <div class="cancel" @click.prevent="cancelMessage()"><i class="fas fa-times-circle"></i></div>
                        </div>
                    </div>
                </div>

                <form v-if="!editComment" class="form-group" @submit.prevent="storeMessage">
                    <hr class="my-4">
                    <div class="text-left">
                        <textarea name="comment" class="form-control" placeholder="ความคิดเห็น" v-model="messageText"></textarea>
                    </div>
                    <input type="text" name="name" class="form-control mt-3" placeholder="ชื่อ" v-model="name">
                    <div class="text-right"><button type="submit" class="btn btn-primary mt-3">Comment</button></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
        apiKey: "AIzaSyB0r08k8rcOyK_3NFQBE5AOrKCd1dc4KUA",
        authDomain: "vuejs-80eda.firebaseapp.com",
        databaseURL: "https://vuejs-80eda-default-rtdb.firebaseio.com",
        projectId: "vuejs-80eda",
        storageBucket: "vuejs-80eda.appspot.com",
        messagingSenderId: "776331965235",
        appId: "1:776331965235:web:ecd63c1708fd18b81f8446",
        measurementId: "G-7RBQFY12PC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const database = firebase.database();
    const messageRef = database.ref("message")

    export default {
        name: 'Comment',
        data(){
            return{
                messageText:'',
                messages: [],
                name:'warawrp',
                editComment: null
            }
        },
        methods:{
            storeMessage:function(){

                messageRef.push({comment:this.messageText,name:this.name})
                this.messageText = ''
                // console.log(this.messages);
                
            },
            deleteMessage:function(message){
                // ลบข้อมูล
                messageRef.child(message.id).remove()
            },
            editMessage:function(message){
                // แก้ไขข้อมูล
                this.editComment = message
                this.messageText = message.comment
            },
            cancelMessage:function(){
                // ยกเลิกการแก้ไขข้อมูล
                this.editComment = null
                this.messageText = ''
            },
            updateMessage:function(){
                // อัพเดตการแก้ไขข้อมูล
                messageRef.child(this.editComment.id).update({comment:this.messageText})
                this.cancelMessage()
            }
        },
        //บันนึกข้อมูลลง firebase 
        created(){

            //หลังการเพิ่มข้อมูล ให้ดึงข้อมูลที่มีในฐานข้อมูลที่มีทั้งหมดมาแสดง
            //snapshot คือให้ดึงข้อมูลลูก(child_added) ที่อยู่ในฐานข้อมูล(messageRef) มาเก็บในรูปแบบชอง array
            messageRef.on('child_added',snapshot => {
                
                // ดึงเฉพาะข้อมูล
                // this.messages.push(snapshot.val()
                // console.log(snapshot.val());

                //ดึง key และข้อมูล
                this.messages.push({...snapshot.val(), id:snapshot.key})
            })
            messageRef.on('child_removed',snapshot => {
                if(confirm('ต้องการลบความคิดเห็นใช่หรือไม่ ?')){
                const deleteComment = this.messages.find(message => message.id == snapshot.key)
                const index=this.messages.indexOf(deleteComment)
                this.messages.splice(index,1)
               }
            })
            messageRef.on('child_changed',snapshot => {
                const updateComment = this.messages.find(message => message.id == snapshot.key)
                updateComment.comment = snapshot.val().comment
               
            })
        }
    }
</script>
