const mongoose=require('mongoose');

const PaymentSchema=new mongoose.Schema({
    order_id:{
        type:String,
        required:true
    },
    razorpay_payment_id:{
        type:String,
        required:true
    },
  razorpay_order_id: {
    type:String,
    required:true
  },
  razorpay_signature:{
    type:String,
    required:true
  }
});

const PaymentModel=mongoose.model('Payment',PaymentSchema);

module.exports=PaymentModel;
