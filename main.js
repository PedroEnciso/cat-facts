"use strict";
let fact = document.getElementById("fact");
let factLength = document.getElementById("length");


function getCatFact() {
    fetch("https://catfact.ninja/fact")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            fact.innerHTML = data.fact;
            factLength.innerHTML = "This cat fact is " + data.length + " words long!";

        });
}

