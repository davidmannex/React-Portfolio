import React from 'react';
import Pdf from '../../assets/images/David_Annex_Resume.pdf';

const MyResume = () => {
  return (
    <section className="about">
      <div>
      <h1 id="about">Resume</h1>
      <a href = {Pdf}>Click here to View
      </a>
      </div>

    </section>
  );
};

export default MyResume;