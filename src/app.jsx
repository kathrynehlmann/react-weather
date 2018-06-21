var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var Api = require('./utils/api');

var query = '/city=Denver,Seattle';
var cities = [];
var citiesWeather = [];
var currentCity = 0;

var Weather = React.createClass({

  //Init data for UI
  getInitialState: function() {
    return {
      weather: '',
      temp: 0,
      humidity: 0,
      wind: 0
    }
  },


  render: function() {
    //Build class names with dynamic data
    var weatherClass = classNames('wi wi-owm-' + this.state.weather);
    var bgColorClass = 'weather-widget '; //very-warm, warm, normal, cold, very-cold

    //Set the background color based on the temperature
    if (this.state.temp >= 80) {
      bgColorClass += 'very-warm';
    }
    else if (this.state.temp > 70 && this.state.temp < 80) {
      bgColorClass += 'warm';
    }
    else if (this.state.temp > 60 && this.state.temp < 70) {
      bgColorClass += 'normal';
    }
    else if (this.state.temp <= 40) {
      bgColorClass += 'cold';
    }
    else if (this.state.temp <= 20) {
      bgColorClass += 'very-cold';
    }

    //Render the DOM elements
    return <div className={bgColorClass}>
      <h1 className="city">{cities[currentCity]}</h1>
      <div className="weather">
        <i className={weatherClass}></i>
    </div>
      <section className="weather-details">
        <div className="temp"><span className="temp-number">{this.state.temp}</span><span className="wi wi-degrees"></span></div>
        <div className="humidity"><i className="wi wi-raindrop"></i>{this.state.humidity %}</div>
        <div className="wind"><i className="wi wi-small-craft-advisory"></i>{this.state.wind} <span className="vel">Mp/h</span></div>
      </section>
    </div>
  }
});

//Assign the React component to a DOM element
var element = React.createElement(Weather, {});
reactDOM.render(element, document.querySelector('.container'));
