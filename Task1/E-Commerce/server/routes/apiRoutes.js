const express=require('express');
const router=express.Router();
const authRoutes=require('./authRoutes');
const ProductController = require('../Controller/ProductController');
const PaymentController=require('../Controller/paymentController');
const OrderController=require('../Controller/orderController');
const UserController = require('../Controller/userController');
router.use('/auth',authRoutes);
router.post('/product/add',ProductController.addProduct);
router.get('/product/all',ProductController.getProducts);
router.get('/product/:productID',ProductController.getProduct);

router.post('/order/create-order',OrderController.createOrder);
// creating payment order in razorpay
router.post('/payment/create-order',PaymentController.createOrder);

// handling payment success callback
router.post('/payment-success',PaymentController.paymentSuccess); 

// getting RazorPay key
router.get('/get-key',PaymentController.getKey);

// getting orders of particular user
router.get('/orders/:userId',OrderController.getOrders);

// getting products of particular category
router.get('/product/category/:categoryId',ProductController.getCategoryProducts);

// getting user details;
router.get('/user/:userId',UserController.getUserDetail);
module.exports= router;