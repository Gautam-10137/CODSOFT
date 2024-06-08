const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({
    userId:{
      type:String,
      required:true
    },
    items: [{
      product: {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        name: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        imageUrl: {
          type: String,
          required: true
        },
        user: {
          // Assuming user is an ObjectId, adjust as needed
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        }
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }],
    shippingAddress: {
        fullName: {
          type: String,
          required: true,
        },
        addressLine1: {
          type: String,
          required: true,
        },
        addressLine2: String,
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        postalCode: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
      // paymentDetails: {
      //   cardNumber: {
      //     type: String,
      //     required: true,
      //   },
      //   expirationDate: {
      //     type: String,
      //     required: true,
      //   },
      //   cvv: {
      //     type: String,
      //     required: true,
      //   },
      // },
      payment: {
        type: String,
        default: 'pending',
      },
      
})

module.exports=mongoose.model('Order',OrderSchema);