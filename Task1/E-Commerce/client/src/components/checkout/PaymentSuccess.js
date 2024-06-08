import React from 'react'
import { useSearchParams ,useNavigate, Link} from 'react-router-dom'
const PaymentSuccess = () => {
  const searchQuery=useSearchParams()[0];
  const referenceNum=searchQuery.get('reference');


  return (
    <div >
      <div className='w-1/2 bg-slate-100 mx-auto my-10 text-center  '>
        <div>
      <h2>Order Placed <strong>Successfully.</strong></h2>
      <p><strong>Reference No. = </strong>{referenceNum}</p>
      </div>
      <Link to="/" className='bg-white rounded-md my-5  shadow-sm hover:shadow-md' >Go to Home page</Link>
      </div>
    </div>
  )
}

export default PaymentSuccess
