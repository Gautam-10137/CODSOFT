const Order=require('../model/Order');
const OrderService={
    createOrder : async(orderData)=>{
        try{
             const newOrder=  new Order(orderData);
             await newOrder.save();
             return newOrder;
        }
        catch(error){
            console.error(error);
        }
    },
    getOrders: async(userId)=>{
        try{
            const orders=await Order.find({userId:userId}).populate('items');
            
            return orders;
        }
        catch(error){
            console.error(error);
        }
    }
}

module.exports=OrderService;
