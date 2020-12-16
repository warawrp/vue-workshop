<template>
    <div id="calculateprice" class="container-fluid text-center mt-3">
        <p style="color: #0075ff;" class="mb-3">Calculate Price</p>
        <div class="row">
            <div class="col-md-4" v-for="item in products" :key="item.id">
                <div class="card h-100">
                    <img :src="item.image" class="card-img-top">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-8 text-left"><p class="card-title">{{item.name}}</p></div>
                        <div class="col-4 text-right"><p>฿{{item.price}}</p></div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <input type="checkbox" @change="changeStatus(item)">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-right mt-2">
                <p>ยอดรวมสินค้า {{totalPrice()}} บาท</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CalculatePrice',
        data(){
            return{
                products:[
                    {
                        id:1,
                        name: 'กาแฟ',
                        price: 35,
                        image: 'https://cdn.pixabay.com/photo/2017/07/31/11/42/black-2557553_960_720.jpg',
                        active: false
                    },
                    {
                        id:2,
                        name: 'ชาคาโมมายด์',
                        price: 40,
                        image: 'https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_960_720.jpg',
                        active: false
                    },
                    {
                        id:3,
                        name: 'ชามะนาว',
                        price: 35,
                        image: 'https://cdn.pixabay.com/photo/2020/09/25/00/15/tea-5600184__340.jpg',
                        active: false
                    }
                ]
            }
        },
        methods:{
            changeStatus:function(item){
                item.active = !item.active
            },
            totalPrice:function(){
                var sum=0;
                this.products.forEach(function(item){
                if(item.active){
                    sum+=item.price;
                }
                });
                return sum;
            }
        }
    }
</script>
