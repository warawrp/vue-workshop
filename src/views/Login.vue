<template>
    <div id="login" class="container-fluid mt-3">
        <p style="color: #0075ff;" class="text-center mb-3">Login</p>
        <form action="">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <div class="form-group">
                        <label>อีเมล</label>
                        <input type="email" class="form-control" v-model="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label>รหัสผ่าน</label>
                        <input type="password" class="form-control" v-model="password" name="password" required>
                    </div>
                    <div align="center">
                        <div  v-if=' !checkEmail && !checkPassword'>   
                            <button type="submit" class="btn btn-primary">เข้าสู่ระบบ</button>
                            <a href="#"><p class="forgotPassword">ลืมรหัสผ่าน ?</p></a>
                        </div>

                        <div  v-else>   
                            <button type="submit" class="btn btn-secondary" disabled>เข้าสู่ระบบ</button>
                            <a href="#"><p class="forgotPassword">ลืมรหัสผ่าน ?</p></a>
                        </div>
                        
                    </div>
                </div>
                <div class="col-3"></div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                email:'',
                password:''
            }
        },
        computed:{
            checkEmail(){
                return(this.email == '')
            },
            checkPassword(){
                return(this.password =='')
            }
        }
    }
</script>