// components/LegalCertificates.jsx
import React from 'react';
import ISO from '../legal_docs/RICHIND_ISO.jpg';
import UDYAM from '../legal_docs/RICHIND_UDYAM.png';
import GST from '../legal_docs/RICHIND_GST.png';

const LegalCertificates = () => {
  return (
   <>
   <div class="legal-text">
      <h1><span>WE</span> ARE A  MARKET <span>LEADING ED-TECH</span> PLATFORM PROVIDING <span>GENUINE
          SERVICES</span>, AND WE HAVE ALL LEGAL <span>CERTIFICATES</span>,
          LET'S HAVE A LOOK ON OUR <span>LEGALITY</span></h1>

      <h6>[RICHIND'S <span>ISO</span>, <span>UDYAM</span> AND <span>GST</span> CERTIFICATE] </h6>
   </div>

  <div class="legal-container">
     <div class="proof-1" data-aos="zoom-in"> <img src={ISO} alt="RICHIND_ISO.jpg" /> </div>
     <div class="proof-2" data-aos="zoom-in"> <img src={UDYAM} alt="RICHIND_UDYAM.png" /> </div>
     <div class="proof-3" data-aos="zoom-in"> <img src={GST} alt="RICHIND_GST.png" /> </div>
  </div>
 </>
  );
};

export default LegalCertificates;
