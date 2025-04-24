// components/Calculations.jsx
import React from 'react';

const Calculations = () => {
  return (

<div className="calc-container">
    <div className="calc-heading">
       <h1>PRACTICAL CALCULATIONS</h1>
    </div>
<div className="income-calc">
    <div className="calc-box" data-aos="zoom-in">
        <h1>By Choosing : Stater Package</h1>

        <div className="comm-str">
           <ul>
             <li>Amount : ₹260</li>
             <li>Direct Commission : ₹200</li>
             <li>Passive Commission : ₹20</li>
           </ul>
        </div>

       <div className="pract-calc">
           <div className="calc">
               <h3>Calculation</h3>
               <ul>
                  <li>Daily 1 A/c : ₹200</li>
                  <li>Weelky 7 A/c : ₹1,400</li>
                  <li>Monthly 30 A/c : ₹6,000</li>
               </ul>
           </div>

           <button className="choose-btn"
                   onClick={() => 
                      (window.location.href='https://richind.org/checkout?slug=starter-package&referrer_code=RINDQMB1KG')
                   }> 
               Choose This
            </button>
       </div> 

    </div>

      <div className="calc-box" data-aos="zoom-in">
        <h1>By Choosing : Intermediate Package</h1>

        <div className="comm-str">
           <ul>
             <li>Amount : ₹512</li>
             <li>Direct Commission : ₹400</li>
             <li>Passive Commission : ₹40</li>
           </ul>
        </div>

       <div className="pract-calc">
           <div className="calc">
               <h3>Calculation</h3>
               <ul>
                  <li>Daily 1 A/c : ₹400</li>
                  <li>Weelky 7 A/c : ₹2,800</li>
                  <li>Monthly 30 A/c : ₹12,000</li>
               </ul>
           </div>

           <button className="choose-btn"
                   onClick={() =>
                       (window.location.href='https://richind.org/checkout?slug=intermediate&referrer_code=RINDQMB1KG')
                   }>
                   Choose This
           </button>
       </div>

    </div>



    <div className="calc-box" data-aos="zoom-in">
        <h1>By Choosing : Expert Package</h1>

        <div className="comm-str">
           <ul>
             <li>Amount : ₹1050</li>
             <li>Direct Commission : ₹800</li>
             <li>Passive Commission : ₹80</li>
           </ul>
        </div>

       <div className="pract-calc">
           <div className="calc">
               <h3>Calculation</h3>
               <ul>
                  <li>Daily 1 A/c : ₹800</li>
                  <li>Weelky 7 A/c : ₹5,600</li>
                  <li>Monthly 30 A/c : ₹24,000</li>
               </ul>
           </div>

           <button className="choose-btn"
                   onClick={() => 
                      (window.location.href='https://richind.org/checkout?slug=expert&referrer_code=RINDQMB1KG')
                   }>
                   Choose This
           </button>
       </div> 

    </div>


    <div className="calc-box" data-aos="zoom-in">
        <h1>By Choosing : Master Package</h1>

        <div classNam="comm-str">
           <ul>
             <li>Amount : ₹2299</li>
             <li>Direct Commission : ₹1700</li>
             <li>Passive Commission : ₹170</li>
           </ul>
        </div>

       <div className="pract-calc">
           <div className="calc">
               <h3>Calculation</h3>
               <ul>
                  <li>Daily 1 A/c : ₹1,700</li>
                  <li>Weelky 7 A/c : ₹11,900</li>
                  <li>Monthly 30 A/c : ₹51,000</li>
               </ul>
           </div>

           <button className="choose-btn"
                   onClick={() => 
                      (window.location.href='https://richind.org/checkout?slug=master&referrer_code=RINDQMB1KG')
                   }>
                   Choose This
           </button>
       </div>

    </div>

    <div className="calc-box" data-aos="zoom-in">
        <h1>By Choosing : Brahmastra Package</h1>

        <div className="comm-str">
           <ul>
             <li>Amount : ₹4999</li>
             <li>Direct Commission : ₹3800</li>
             <li>Passive Commission : ₹380</li>
           </ul>
        </div>

       <div className="pract-calc">
           <div className="calc">
               <h3>Calculation</h3>
               <ul>
                  <li>Daily 1 A/c : ₹3,800</li>
                  <li>Weelky 7 A/c : ₹26,600</li>
                  <li>Monthly 30 A/c : ₹1,14,000</li>
               </ul>
           </div>

           <button className="choose-btn"
                   onClick={() => 
                       (window.location.href='https://richind.org/checkout?slug=brahmastra&referrer_code=RINDQMB1KG')
                   }>
                   Choose This
            </button>
       </div>

    </div>


    <div className="calc-box" data-aos="zoom-in">
        <h1>By Choosing : Premium Pro Package</h1>

        <div className="comm-str">
           <ul>
             <li>Amount : ₹9998</li>
             <li>Direct Commission : ₹7300</li>
             <li>Passive Commission : ₹730</li>
           </ul>
        </div>

       <div className="pract-calc">
           <div className="calc">
               <h3>Calculation</h3>
               <ul>
                  <li>Daily 1 A/c : ₹7,300</li>
                  <li>Weelky 7 A/c : ₹51,100</li>
                  <li>Monthly 30 A/c : ₹2,19,000</li>
               </ul>
           </div>

           <button className="choose-btn"
                   onClick={() => 
                       (window.location.href='https://richind.org/checkout?slug=premium-pro&referrer_code=RINDQMB1KG')
                   }>
                   Choose This
           </button>
       </div>

    </div>



</div>

</div>

  );
};

export default Calculations;
