// Copyright (c) 2022 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: March, 2022
// This file contains the JS functions for index.html

function areaCalculate() {
  
  //declaring variables
  let height = parseFloat(document.getElementById("height").value);
  let sideA = parseFloat(document.getElementById("side-a").value);
  let sideB = parseFloat(document.getElementById("side-b").value);
  let totalSides = sideA + sideB;
  let area = totalSides / 2 * height;
  
  //displaying calculations to screen
  document.getElementById("display-results").innerHTML = "The area of the trapezoid is " + area.toFixed(2) + " cm<sup>2</sup>."
}