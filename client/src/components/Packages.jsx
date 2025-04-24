// components/Packages.jsx
import React from 'react';
import starter from '../packages-list/STARTER_PKG.png';
import intermediate from '../packages-list/INTERMEDIATE_PKG.png';
import expert from '../packages-list/EXPERT_PKG.png';
import master from '../packages-list/MASTER_PKG.png';
import bramhastra from '../packages-list/BRAMHASTRA_PKG.png';
import premiumPro from '../packages-list/PREMIUM-PRO_PKG.png';





const Packages = () => {
  return (

  <div class="pkg-container">
     <div class="heading">
        <h1>OUR DIGITAL PACKAGES </h1>
     </div>
    
     <div class="all_pkg_container">
        <div class="marketing" data-aos="fade-up">
           <div class="pkg-img">
               <img src={starter} alt="STARTER_PKG.png" />
           </div>

          <div class="details-container">
              <h2>Pkg Name : Starter</h2>
              <h2>Discounted Amount : Rs. 260.00</h2>
              <h2>Direct Commission : Rs. 200.00</h2>
              <h2>Passive Commission : Rs. 20.00</h2>
          </div>
     </div>

     <div class="branding" data-aos="fade-up">
              <div class="pkg-img">
                 <img src={intermediate} alt="INTERMEDIATE_PKG.png" />
             </div>

          <div class="details-container">
              <h2>Pkg Name : Intermediate</h2>
              <h2>Discounted Amount : Rs. 512.00</h2>
              <h2>Direct Commission : Rs. 400.00</h2>
              <h2>Passive Commission : Rs. 40.00</h2>
          </div>
    </div>

     <div class="supreme" data-aos="fade-up">
          <div class="pkg-img">
                <img src={expert} alt="EXPERT_PKG.png" />
             </div>

          <div class="details-container">
              <h2>Pkg Name : Expert</h2>
              <h2>Discounted Amount : Rs. 1050.00</h2>
              <h2>Direct Commission : Rs. 800.00</h2>
              <h2>Passive Commission : Rs. 80.00</h2>
          </div>
    </div>

     <div class="trafic" data-aos="fade-up">
           <div class="pkg-img">
               <img src={master} alt="MASTER_PKG.png" />
             </div>

          <div class="details-container">
              <h2>Pkg Name : Master</h2>
              <h2>Discounted Amount : Rs. 2299.00</h2>
              <h2>Direct Commission : Rs. 1700.00</h2>
              <h2>Passive Commission : Rs. 170.00</h2>
          </div>
    </div>

      <div class="influence" data-aos="fade-up">
            <div class="pkg-img">
                 <img src={bramhastra} alt="BRAMHASTRA_PKG.png" />
             </div>

          <div class="details-container">
              <h2>Pkg Name : Brahmastra</h2>
              <h2>Discounted Amount : Rs. 4999.00</h2>
              <h2>Direct Commission : Rs. 3800.00</h2>
              <h2>Passive Commission : Rs. 380.00</h2>
          </div>
      </div>

     <div class="finance" data-aos="fade-up">
            <div class="pkg-img">
                 <img src={premiumPro} alt="PREMIUM-PRO_PKG.png" />
             </div>

          <div class="details-container">
              <h2>Pkg Name : Premium Pro </h2>
              <h2>Discounted Amount : Rs. 9998.00</h2>
              <h2>Direct Commission : Rs. 7300.00</h2>
              <h2>Passive Commission : Rs. 730.00</h2>
          </div>
    </div>

   </div>
</div>

  );
};

export default Packages;
