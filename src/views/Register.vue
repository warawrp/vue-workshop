<template>
    <div id="register" class="container-fluid mt-3">
        <p style="color: #0075ff;" class="text-center mb-3">Register</p>
        <form action="http://192.168.1.57:8000/api/register" method="post">
            <div class="row">
                <div class="col-6 form-group">
                    <label>อีเมล</label>
                    <input type="email" class="form-control" v-model="email" name="email" required>
                </div>
                <div class="col-6 form-group">
                    <label>ชื่อ</label>
                    <input type="text" class="form-control" v-model="name" name="name" required>
                </div>
            </div>
            <div class="row">
                <div class="col-6 form-group">
                    <label>รหัสผ่าน</label>
                    <input type="password" class="form-control" v-model="password" name="password" required>
                </div>

                <div class="col-6 form-group">
                    <label class="mr-2">ยืนยันรหัสผ่าน</label>
                    <label class="error" v-if='notSamePasswords'>
                        <p>รหัสผ่านไม่ตรงกัน</p>
                    </label>
                    <input type="password" class="form-control" v-model.lazy='checkPassword' required>
                </div>
            </div>

            <transition name="hint" appear>
                <div class="hints" v-if='passwordValidation.errors.length > 0 && !submitted' >
                    <p class="mb-2" style="font-weight:600;">วิธีการตั้งรหัสผ่าน</p>
                    <p v-for='error in passwordValidation.errors' :key="error">{{error}}</p>
                </div>
            </transition>

            <input type="checkbox" id="agreememt" value="accept" v-model="agreements" class="mr-2">
            <label for="agreememt">ยอมรับ</label>
            <label data-toggle="modal" data-target="#exampleModalCenter" style="text-decoration: underline;">เงื่อนไข และข้อตกลง</label><br>
            <!-- <span>ตรวจสอบการยอมรับเงื่อนไข: {{ agreements }}</span><br> -->
        
            <button class="btn btn-primary" @keyup='resetPasswords' v-if='passwordsFilled && !notSamePasswords && passwordValidation.valid && !acceptAgreementFilled && !checkEmailFilled && !checkNameFilled' >
               สมัครสมาชิก
            </button>
            <button v-else class="btn btn-secondary" disabled>สมัครสมาชิก</button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p class="modal-title">ข้อกำหนดและเงื่อนไข</p>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <label for="agreememt" class="btn btn-warning" v-if="!acceptAgreementFilled">ไม่ยอมรับ</label>
                            <label for="agreememt" class="btn btn-primary" v-else>ยอมรับ</label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                rules: [
                    { message:"ตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว", regex:/[a-z]+/ },
                    { message:"ตัวอักษรพิมพ์เล็กอย่างใหญ่ 1 ตัว",  regex:/[A-Z]+/ },
                    { message:"ต้องมีอย่างน้อย 8 ตัวอักษร", regex:/.{8,}/ },
                    { message:"ตัวเลข อย่างน้อย 1 ตัว", regex:/[0-9]+/ }
                ],
                email:'',
                password:'',
                checkPassword:'',
                passwordVisible:false,
                submitted:false,
                agreements: [],
                name:''
            }
        },
        methods: {
            resetPasswords () {
                this.email =''
                this.name=''
                this.password = ''
                this.checkPassword = ''
                this.submitted = true
                setTimeout(() => {
                    this.submitted = false
                }, 2000)
            }
        },
        computed: {
            notSamePasswords () {
                if (this.passwordsFilled) {
                    return (this.password !== this.checkPassword)
                } else {
                    return false
                }
            },
            passwordsFilled () {
                return (this.password !== '' && this.checkPassword !== '')
            },
            passwordValidation () {
                let errors = []
                for (let condition of this.rules) {
                    if (!condition.regex.test(this.password)) {
                        errors.push(condition.message)
                    }
                }
                if (errors.length === 0) {
                    return { valid:true, errors }
                } else {
                    return { valid:false, errors }
                }
            },
            acceptAgreementFilled(){
                return (this.agreements == '')
            },
            checkEmailFilled(){
                return(this.email == '')
            }
            ,
            checkNameFilled(){
                return(this.name == '')
            }

        }
    }
</script>
