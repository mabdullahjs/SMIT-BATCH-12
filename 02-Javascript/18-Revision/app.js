console.log('hello world!');


fetch('https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=karachi&aqi=no')
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.log(err))