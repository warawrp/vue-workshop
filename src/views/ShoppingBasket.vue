<template>
    <div id="shoppingbasket" class="container-fluid  text-center mt-3">
        <p style="color: #0075ff;" class="mb-3">Shopping Basket</p>
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
                    <button type="button" class="btn btn-dark w-100" @click="addCart(item)">หยิบลงตะกร้า</button>
                </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="cart != 0">
            <div class="col-12 mt-2">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">รูปสินค้า</th>
                            <th scope="col">ชื่อสินค้า</th>
                            <th scope="col">ราคา</th>
                            <th scope="col">จำนวน</th>
                            <th scope="col">ยอดรวม</th>
                            <th scope="col">ลบ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in cart" :key="product.id">
                            <td><img :src="product.image" class="imgProduct"></td>
                            <td>{{product.name}}</td>
                            <td>{{product.price}}</td>
                            <td> 
                                <button type="button" class="btn-dark2" @click="minusQty(product)"><i class="fas fa-minus"></i></button>
                                <label class="mx-3">{{product.quantity}}</label>
                                <button type="button" class="btn-dark2" @click="plusQty(product)"><i class="fas fa-plus"></i></button>
                            </td>
                            <td>{{product.total}}</td>
                            <td><button type="button" class="btn btn-danger" @click="removeProduct(product)"><i class="fas fa-trash-alt"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12 text-right">
                <p>ยอดรวมสินค้า {{totalCart()}} บาท</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShoppingBasket',
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
                ],
                cart:[],
                coffee: 0,
                camomile: 0,
                lemon: 0
            }
        },
        methods:{
            addCart:function(item){

                //ซื้อกาแฟ
                if(item.id == 1){
                    this.coffee += 1;
                    if(this.coffee <= 1){
                        // ซื้อแก้วเดียว
                        this.pushData(item)
                    }else{
                        //ซื้อหลายแก้วรายการเดียวกัน
                        var foundCoffee = this.findId(item);
                        this.cart[foundCoffee].quantity += 1;
                        this.cart[foundCoffee].total = this.cart[foundCoffee].quantity * this.cart[foundCoffee].price;
                    }
                }
                if(item.id == 2){
                    this.camomile += 1;
                    if(this.camomile <= 1){
                        // ซื้อแก้วเดียว
                        this.pushData(item)
                    }else{
                        //ซื้อหลายแก้วรายการเดียวกัน
                        var foundCamomile = this.findId(item);
                        this.cart[foundCamomile].quantity += 1;
                        this.cart[foundCamomile].total = this.cart[foundCamomile].quantity * this.cart[foundCamomile].price;
                    }
                }
                if(item.id == 3){
                    this.lemon += 1;
                    if(this.lemon <= 1){
                        // ซื้อแก้วเดียว
                        this.pushData(item)
                    }else{
                        //ซื้อหลายแก้วรายการเดียวกัน
                        var foundLemon = this.findId(item);
                        this.cart[foundLemon].quantity += 1;
                        this.cart[foundLemon].total = this.cart[foundLemon].quantity * this.cart[foundLemon].price;
                    }
                }
            },
            pushData:function(item){
                this.cart.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                    total: item.price
                });
            },
            findId:function(item){
                for(var i = 0; i < this.cart.length; i++){
                    // ค้นหาไอดีสินค้าในตะกร้ากับสินค้าที่กดซื้อว่าซ้ำหรือไม่ ถ้าซ้ำให้เพิ่มจำนวน (Qusntity)
                    if(this.cart[i].id == item.id){
                        // ตำแหน่งสินค่าที่ค้นเจอในตะกร้า
                        return i;
                    }
                }
                return -1;
            },
            minusQty:function(product){
                product.quantity -=1;
                if(product.quantity <=1){
                    product.quantity = 1;
                }
                product.total = product.quantity * product.price;
                // console.log("minus");
            },
            plusQty:function(product){
                product.quantity += 1;
                product.total = product.quantity * product.price;
                // console.log("plus");
            },
            removeProduct(product){
                if(confirm('ต้องการลบสินค้าใช่หรือไม่ ?')){
                   var index = this.cart.indexOf(product);
                   this.cart.splice(index,1);
                   if(product.id==1){
                       this.coffee = 0;
                   }
                   if(product.id==2){
                       this.camomile = 0;
                   }
                   if(product.id==3){
                       this.lemon = 0;
                   }
                }
            },
            totalCart:function(){
                var sum = 0;
                this.cart.forEach(function(item){
                    sum += item.total;
                })
                return sum;
            }
        }
    }
</script>

