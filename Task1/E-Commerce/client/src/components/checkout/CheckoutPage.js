import React,{useState} from 'react'
import OrderSummary from './OrderSummary';
import ShippingInformation from './ShippingInformation';
import PaymentDetails from './PaymentDetails';
import OrderConfirmation from './OrderConfirmation';

const CheckoutPage = () => {
    const [currentStep,setCurrentStep]=useState(1);
    const [orderData, setOrderData] = useState({
      userId:'',
      items: [{product:{},quantity:0}], 
      shippingAddress: {
        fullName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
      },
      
      payment:'pending'
    });
   console.log(orderData);
    const updateOrderItems=(selectedProducts)=>{
          setOrderData((prevData)=>({
            ...prevData,
            items:selectedProducts
          }));
          // console.log(orderData);
    };

    const updateShippingAddress=(address)=>{
      setOrderData((prevData)=>({
        ...prevData,
        shippingAddress:address
      }))
      // console.log(orderData);
    }
    const updatePaymentDetails=(paymentInformation)=>{
      setOrderData((prevData)=>({
        ...prevData,
        paymentDetails:paymentInformation
      }))
      // console.log(orderData);
    }
    const handleNext=()=>{
        setCurrentStep(currentStep+1);
    }


    const handlePrevStep=()=>{
        setCurrentStep(currentStep-1);
    }

  return (
    <div>
      {currentStep==1 && <OrderSummary  onNextStep={handleNext} updateOrderItems={updateOrderItems}/>}
      {currentStep===2 && <ShippingInformation onNextStep={handleNext} onPrevStep={handlePrevStep} updateShippingAddress={updateShippingAddress}/>}
      {/* {currentStep===3 && <PaymentDetails onNextStep={handleNext} onPrevStep={handlePrevStep} updatePaymentDetails={updatePaymentDetails}/>} */}
      {currentStep===3 && <OrderConfirmation orderData={orderData}/>}
    </div>
  )
}

export default CheckoutPage
