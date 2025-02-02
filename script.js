  /// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var Speler1X = 100; // x-positie van speler
var Speler1Y = 300; // y-positie van speler

var KogelX = 650;    // x-positie van kogel
var KogelY = 350;    // y-positie van kogel
var KogelS = 5

var Speler2X = 1150;   // x-positie van vijand
var Speler2Y = 300;   // y-positie van vijand

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


draw = function() {

background('blue');

    fill("white");
    rect(20, 20, width - 2 * 20, height - 2 * 20);

        fill("green");
        rect(Speler2X, Speler2Y, 20, 100);

if (keyIsDown(UP_ARROW)) {
    Speler2Y -= 5
  }
if (keyIsDown(DOWN_ARROW)) {
    Speler2Y += 5
 }

        fill("orange");
  ellipse(KogelX, KogelY, 50, 50);

  
    if (KogelX > Speler2X-30 && KogelY>=Speler1Y-50) {
        KogelS = -5;
    }
    if (KogelX < Speler1X+35) {
        KogelS = 5;
    }

    // move the ball
    KogelX = KogelX + KogelS;



 /*
  if (KogelX>Speler2X-25 && KogelX<Speler2X && KogelY>=Speler2Y && KogelY<=Speler2Y+100)
   {KogelX -= 10}
KogelX += 5
*/   

    fill("purple");
    rect(Speler1X, Speler1Y, 20, 100);

if (keyIsDown(87)) {
    Speler1Y -= 5
  }

if (keyIsDown(83)) {
    Speler1Y += 5
  }  


};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */

/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
   
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler1(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}

