import React from 'react';

import CodingQuiz from '../../assets/images/quiz.jpg';
import WeatherApp from '../../assets/images/weatherAPI.png';
import PasswordGenerator from '../../assets/images/passwordGenerator.jpg';

const Projects = () => {
  return (
    <section className="portfolio">
      <div>
        <h1 className="projects">My Projects</h1>
        <div className="row">

          <div className="col">
            <div className="card">
              <img
                src={CodingQuiz}
                alt="Coding Quiz Game"
                className="card-img-top"
              />
              Coding Quiz Game
              
              <div className='card-text'>A typical coding assessment consists of interactive coding challenges and multiple-choice questions.</div>

              <div className="card-body">
                <a
                  href="https://github.com/davidmannex/Quiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://davidmannex.github.io/Quiz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={WeatherApp}
                alt="Server Side API Weather App"
                className="card-img-top"
              />
              Server Side API Weather App

              <div className='card-text'>The weather dashboard is a browser-based application with dynamically updated HTML and CSS. To access both current and anticipated weather data, it makes use of Third-Party APIs provided by OpenWeather.com.</div>

              <div className="card-body">
                <a
                  href="https://github.com/davidmannex/WeatherDashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://davidmannex.github.io/WeatherDashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={PasswordGenerator} alt="PasswordGenerator" className="card-img-top" />
              Password Generator

              <div className='card-text'>This is a tool to generate a password given user specifications</div>

              <div className="card-body">
                <a
                  href="https://github.com/davidmannex/PasswordGenerator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://davidmannex.github.io/PasswordGenerator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;