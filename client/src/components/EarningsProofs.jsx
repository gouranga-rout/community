// components/EarningsProofs.jsx
import React from 'react';
import proof1 from '../earnings/proof-1.jpg';
import proof2 from '../earnings/proof-2.jpg';
import proof3 from '../earnings/proof-3.jpg';
import proof4 from '../earnings/proof-4.jpg';
import proof5 from '../earnings/proof-5.jpg';
import proof6 from '../earnings/proof-6.jpg';
import proof7 from '../earnings/proof-7.jpg';
import proof8 from '../earnings/proof-8.jpg';
import proof9 from '../earnings/proof-9.jpg';



const EarningsProofs = () => {
  return (
   <>
    <div class="proof-text">
       <h1>LETS HAVE A <span>LOOK</span> HOW MUCH <span>OTHERS EARNS </span>
            WITH THIS <span>PLATFORM</span> BY <span>UTILIZING </span>
           THERE <span>FREE TIME</span></h1>
     </div>
     
    <div class="earnings">
     <img src={proof1} alt="payment-proof1" />
     <img src={proof2} alt="payment-proof2" />
     <img src={proof3} alt="payment-proof3" data-aos="zoom-in" />
     <img src={proof4} alt="payment-proof4" data-aos="zoom-in" />
     <img src={proof5} alt="payment-proof5" data-aos="zoom-in" />
     <img src={proof6} alt="payment-proof6" data-aos="zoom-in" />
     <img src={proof7} alt="payment-proof7" data-aos="zoom-in" />
     <img src={proof8} alt="payment-proof8" data-aos="zoom-in" />
   </div>
  </>
  );
};

export default EarningsProofs;
