import "./styles.css";
import EulerSolutions from "./solution_functions.js";
import $ from "jquery";

$(document).ready(function() {
  $("#title").append(
    "Project Euler Solutions for 1 - " + EulerSolutions.length
  );

  // loops through all of the available functions in allFunctions and lists them in the page
  // will not execute any function unless the corresponding button is clicked
  for (let i = 0; i < EulerSolutions.length; i++) {
    //let result = EulerSolutions[i].func();
    let name = EulerSolutions[i].name;
    //$("#answers").append("<li>" + name + ": " + result + "</li>");
    $("#answers").append(
      '<li class=".answerRow" name="' +
        name +
        '"><span id="' +
        name +
        '">' +
        (i + 1) +
        ") " +
        name +
        ': </span><button class="runFunction" value="' +
        name +
        '">Run Function</button></li>'
    );
  }

  //runs whenever one of the function buttons is clicked, finds the corresponding function and executes it off the array
  $(".runFunction").click(function() {
    let value = $(this).val();
    console.log(value);
    let selectedFunc = EulerSolutions.find(e => e.name === value);

    let t0 = performance.now();
    let solution = selectedFunc.func();
    let t1 = performance.now();

    //check if an answer label was already added, so theres no duplicate values
    if ($("#" + value + "_answer").length !== 0) {
      $("#" + value + "_answer").remove();
    }

    $("#" + value).append(
      '<label class="answerStyle" id="' +
        value +
        '_answer">' +
        solution +
        '<label class="timeStyle"> (Took ' +
        Math.round(t1 - t0) +
        " ms)</label></label>"
    );
  });
});
