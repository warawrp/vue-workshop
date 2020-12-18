<template>
    <div id="index" class="container-fluid mt-3">
        <p style="color:#0075ff" class="text-center mb-3">Vue.js & PHP (Single page Application)</p>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form >
                    <div class="form-group">
                        <label>ชื่อ</label>
                        <input type="text" class="form-control" v-model="from.fname">
                    </div>
                    <div class="form-group">
                        <label>นามสกุล</label>
                        <input type="text" class="form-control" v-model="from.lname">
                    </div>
                    <div align="center">
                        <button type="submit" class="btn btn-primary mr-2">บันทึก</button>
                        <button type="reset" class="btn btn-danger">ยกเลิก</button>
                    </div>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 py-2">{{from}}</div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script src="../js/app.js"></script>