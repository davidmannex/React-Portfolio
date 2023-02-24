import React from 'react';
import myPhoto from '../../assets/images/SelfPhoto.jpg';

const Home = () => {
  return (
    <section className="home my-5">
      <div className="title">
        <h1>Web Developer</h1>
        <p>Hi, I'm David, I went to Wesleayn University and graduated in 2021</p>
      </div>
      <div className="selfie portrait">
        <img src={myPhoto} alt="Photo of Me" />
      </div>
    </section>
  );
};

export default Home;