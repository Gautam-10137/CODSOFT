const Razorpay=require('razorpay');
const crypto=require('crypto');
require('dotenv').config();
const Payment=require('../model/Payment');
const Order=require('../model/Order');
const RAZORPAY_API_KEY=process.env.RAZORPAY_API_KEY;
const RAZORPAY_API_SECRET=process.env.RAZORPAY_API_SECRET; 
const razorpay=new Razorpay({
    key_id:RAZORPAY_API_KEY,
    key_secret:RAZORPAY_API_SECRET,
});

// for creating an order for payment
const createOrder=async (req,res)=>{
    try{
       
        const {amount,newOrderId}=req.body;
       const options={
          amount:Number(amount*100),
          currency:"INR",  
          notes:{
            newOrderId
          }
       }; 
       const order=await razorpay.orders.create(options);
       
      
       res.status(200).json({order});
 
    }
    catch(error){
        res.status(500).json('Internal server error');
    }
}

// process the successful payment and update in database
const paymentSuccess=async (req,res)=>{
  try{
      console.log(req.body);
      
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
    const order=await razorpay.orders.fetch(razorpay_order_id);
    const newOrderId=order.notes.newOrderId;
    await Order.findByIdAndUpdate(newOrderId,{$set:{payment:'paid'}});
    const body=razorpay_order_id+"|"+razorpay_payment_id;
  
    const expectedSignature=crypto.createHmac('sha256',RAZORPAY_API_SECRET)
                            .update(body.toString())
                            .digest('hex')
  
    const isAuthentic=razorpay_signature===expectedSignature;
    if(isAuthentic){
    //  database comes here
    await Order.findByIdAndUpdate(newOrderId,{$set:{payment:'paid'}});
    const order_id=newOrderId;
    await Payment.create({order_id,razorpay_order_id,razorpay_payment_id,razorpay_signature});
    
    res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    }
    
   
  
  }
  catch(error){
    res.status(500).json('Internal server error');
  }
}



const getKey=(req,res)=>{
      res.send({key:RAZORPAY_API_KEY});
}



module.exports={createOrder,paymentSuccess,getKey};
