import _ from 'lodash';
import $ from 'jquery';
import * as messageGenerator from './messageGenerator';


$(() => {
  console.log("loaded");

  $('body').append('<p id="display">...</display');

  window.setInterval(() => {
    $('#display').text(messageGenerator.generate());
  }, 250);
});
