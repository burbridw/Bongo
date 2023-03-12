const gameType = 4

let activeArr = []
let selectArr = []
let answersArr = []
let bingoArr = []
let inputArr = []
let selectionOpen = false
let gameActive = false
let bingoActive = false
let readyForBingo = false
let gameLeader = false
let bingoImageSeen = false
let beingDragged = false
let movingCurrentImage = false
let goBackBtn = ""
let imgList = ""
let selectedImage = ""
let imagesReady = 0
let currentBingoImage = 0
let lang = "en"
let draggedItem
let sourceBox

const gameBtnDisplay = document.getElementById("game-btn-container")
const topicBtnDisplay = document.getElementById("topic-btn-container")
const gameContainer = document.querySelector(".game-container")
const bingoSelectionOuter = document.querySelector(".bingo-selection")
const bingoContainer = document.querySelector(".bingo-container")
const bingoSelection = document.querySelector(".bingo-selection-grid")
const bingoGrid = document.querySelector(".bingo-image-grid")
const bingoImageBoxes = document.querySelectorAll(".image-box")
const bingoScreen = document.querySelector(".bingo-screen")

const selectObj = {
    "feelings" : ["./images/feelings/img1.png","./images/feelings/img2.png", "./images/feelings/img3.png", "./images/feelings/img4.png", "./images/feelings/img5.png", "./images/feelings/img6.png", "./images/feelings/img7.png", "./images/feelings/img8.png", "./images/feelings/img9.png","./images/feelings/img10.png"], 
    "numbers" : ["./images/numbers/img1.png","./images/numbers/img2.png", "./images/numbers/img3.png", "./images/numbers/img4.png", "./images/numbers/img5.png", "./images/numbers/img6.png", "./images/numbers/img7.png", "./images/numbers/img8.png", "./images/numbers/img9.png", "./images/numbers/img10.png", "./images/numbers/img11.png", "./images/numbers/img12.png"], 
    "weather" : ["./images/weather/img1.png","./images/weather/img2.png", "./images/weather/img3.png", "./images/weather/img4.png", "./images/weather/img5.png", "./images/weather/img6.png"], 
    "colors" : ["./images/colours/img1.png","./images/colours/img2.png", "./images/colours/img3.png", "./images/colours/img4.png", "./images/colours/img5.png", "./images/colours/img6.png", "./images/colours/img7.png", "./images/colours/img8.png", "./images/colours/img9.png","./images/colours/img10.png"],
    "shapes" : ["./images/shapes/img1.png","./images/shapes/img2.png", "./images/shapes/img3.png", "./images/shapes/img4.png", "./images/shapes/img5.png", "./images/shapes/img6.png", "./images/shapes/img7.png", "./images/shapes/img8.png"],
    "sports" : ["./images/sports/img1.png","./images/sports/img2.png", "./images/sports/img3.png", "./images/sports/img4.png", "./images/sports/img5.png", "./images/sports/img6.png", "./images/sports/img7.png", "./images/sports/img8.png","./images/sports/img9.png","./images/sports/img10.png","./images/sports/img11.png","./images/sports/img12.png","./images/sports/img13.png"],
    "foods" : ["./images/foods/img1.png","./images/foods/img2.png", "./images/foods/img3.png", "./images/foods/img4.png", "./images/foods/img5.png", "./images/foods/img6.png", "./images/foods/img7.png", "./images/foods/img8.png", "./images/foods/img9.png", "./images/foods/img10.png", "./images/foods/img11.png", "./images/foods/img12.png", "./images/foods/img13.png", "./images/foods/img14.png", "./images/foods/img15.png", "./images/foods/img16.png", "./images/foods/img17.png", "./images/foods/img18.png", "./images/foods/img19.png", "./images/foods/img20.png", "./images/foods/img21.png", "./images/foods/img22.png", "./images/foods/img23.png", "./images/foods/img24.png", "./images/foods/img25.png"],
    "desserts" : ["./images/desserts/img1.png","./images/desserts/img2.png", "./images/desserts/img3.png", "./images/desserts/img4.png", "./images/desserts/img5.png", "./images/desserts/img6.png", "./images/desserts/img7.png", "./images/desserts/img8.png"], 
    "drinks" : ["./images/drinks/img1.png","./images/drinks/img2.png", "./images/drinks/img3.png", "./images/drinks/img4.png", "./images/drinks/img5.png", "./images/drinks/img6.png", "./images/drinks/img7.png", "./images/drinks/img8.png"], 
    "fruitandveg" : ["./images/fruitsvegetables/img1.png","./images/fruitsvegetables/img2.png", "./images/fruitsvegetables/img3.png", "./images/fruitsvegetables/img4.png", "./images/fruitsvegetables/img5.png", "./images/fruitsvegetables/img6.png", "./images/fruitsvegetables/img7.png", "./images/fruitsvegetables/img8.png", "./images/fruitsvegetables/img9.png", "./images/fruitsvegetables/img10.png", "./images/fruitsvegetables/img11.png", "./images/fruitsvegetables/img12.png", "./images/fruitsvegetables/img13.png", "./images/fruitsvegetables/img14.png", "./images/fruitsvegetables/img15.png", "./images/fruitsvegetables/img16.png", "./images/fruitsvegetables/img17.png", "./images/fruitsvegetables/img18.png", "./images/fruitsvegetables/img19.png", "./images/fruitsvegetables/img20.png", "./images/fruitsvegetables/img21.png", "./images/fruitsvegetables/img22.png", "./images/fruitsvegetables/img23.png", "./images/fruitsvegetables/img24.png", "./images/fruitsvegetables/img25.png", "./images/fruitsvegetables/img26.png", "./images/fruitsvegetables/img27.png"], 
    "ingredients" : ["./images/ingredients/img1.png","./images/ingredients/img2.png", "./images/ingredients/img3.png", "./images/ingredients/img4.png", "./images/ingredients/img5.png", "./images/ingredients/img6.png", "./images/ingredients/img7.png", "./images/ingredients/img8.png", "./images/ingredients/img9.png", "./images/ingredients/img10.png"], 
    "meals" : ["./images/meals/img1.png","./images/meals/img2.png", "./images/meals/img3.png"], 
    "tastes" : ["./images/tastes/img1.png","./images/tastes/img2.png", "./images/tastes/img3.png", "./images/tastes/img4.png", "./images/tastes/img5.png", "./images/tastes/img6.png", "./images/tastes/img7.png", "./images/tastes/img8.png", "./images/tastes/img9.png", "./images/tastes/img10.png"], 
    "animals" : ["./images/animals/img1.png","./images/animals/img2.png", "./images/animals/img3.png", "./images/animals/img4.png", "./images/animals/img5.png", "./images/animals/img6.png", "./images/animals/img7.png", "./images/animals/img8.png", "./images/animals/img9.png", "./images/animals/img10.png", "./images/animals/img11.png", "./images/animals/img12.png", "./images/animals/img13.png", "./images/animals/img14.png", "./images/animals/img15.png", "./images/animals/img16.png", "./images/animals/img17.png", "./images/animals/img18.png", "./images/animals/img19.png", "./images/animals/img20.png", "./images/animals/img21.png", "./images/animals/img22.png", "./images/animals/img23.png", "./images/animals/img24.png"], 
    "seaanimals" : ["./images/seaanimals/img1.png","./images/seaanimals/img2.png", "./images/seaanimals/img3.png", "./images/seaanimals/img4.png", "./images/seaanimals/img5.png", "./images/seaanimals/img6.png", "./images/seaanimals/img7.png", "./images/seaanimals/img8.png"], 
    "bugs" : ["./images/bugs/img1.png","./images/bugs/img2.png", "./images/bugs/img3.png", "./images/bugs/img4.png"], 
    "nature" : ["./images/nature/img1.png","./images/nature/img2.png", "./images/nature/img3.png", "./images/nature/img4.png", "./images/nature/img5.png", "./images/nature/img6.png", "./images/nature/img7.png", "./images/nature/img8.png", "./images/nature/img9.png", "./images/nature/img10.png", "./images/nature/img11.png", "./images/nature/img12.png"], 
    "months" : ["./images/months/img1.png","./images/months/img2.png", "./images/months/img3.png", "./images/months/img4.png", "./images/months/img5.png", "./images/months/img6.png", "./images/months/img7.png", "./images/months/img8.png", "./images/months/img9.png", "./images/months/img10.png", "./images/months/img11.png", "./images/months/img12.png"], 
    "seasons" : ["./images/seasons/img1.png","./images/seasons/img2.png", "./images/seasons/img3.png", "./images/seasons/img4.png"], 
    "timesofday" : ["./images/timesofday/img1.png","./images/timesofday/img2.png", "./images/timesofday/img3.png", "./images/timesofday/img4.png"], 
    "days" : ["./images/days/img1.png","./images/days/img2.png", "./images/days/img3.png", "./images/days/img4.png","./images/days/img5.png", "./images/days/img6.png", "./images/days/img7.png"], 
    "countries" : ["./images/countries/img1.png","./images/countries/img2.png", "./images/countries/img3.png", "./images/countries/img4.png", "./images/countries/img5.png", "./images/countries/img6.png", "./images/countries/img7.png", "./images/countries/img8.png", "./images/countries/img9.png", "./images/countries/img10.png", "./images/countries/img11.png", "./images/countries/img12.png", "./images/countries/img13.png", "./images/countries/img14.png", "./images/countries/img15.png", "./images/countries/img16.png", "./images/countries/img17.png", "./images/countries/img18.png", "./images/countries/img19.png", "./images/countries/img20.png", "./images/countries/img21.png", "./images/countries/img22.png", "./images/countries/img23.png", "./images/countries/img24.png", "./images/countries/img25.png", "./images/countries/img26.png"], 
    "family" : ["./images/family/img1.png","./images/family/img2.png", "./images/family/img3.png", "./images/family/img4.png", "./images/family/img5.png", "./images/family/img6.png", "./images/family/img7.png"], 
    "people" : ["./images/people/img1.png","./images/people/img2.png", "./images/people/img3.png", "./images/people/img4.png"], 
    "personalities" : ["./images/personalities/img1.png","./images/personalities/img2.png", "./images/personalities/img3.png", "./images/personalities/img4.png", "./images/personalities/img5.png", "./images/personalities/img6.png", "./images/personalities/img7.png"], 
    "actions1" : ["./images/actions1/img1.png","./images/actions1/img2.png", "./images/actions1/img3.png", "./images/actions1/img4.png", "./images/actions1/img5.png", "./images/actions1/img6.png", "./images/actions1/img7.png", "./images/actions1/img8.png", "./images/actions1/img9.png", "./images/actions1/img10.png", "./images/actions1/img11.png", "./images/actions1/img12.png", "./images/actions1/img13.png", "./images/actions1/img14.png", "./images/actions1/img15.png", "./images/actions1/img16.png", "./images/actions1/img17.png", "./images/actions1/img18.png", "./images/actions1/img19.png", "./images/actions1/img20.png", "./images/actions1/img21.png", "./images/actions1/img22.png", "./images/actions1/img23.png", "./images/actions1/img24.png", "./images/actions1/img25.png"], 
    "pastactions" : ["./images/pastactions/img1.png","./images/pastactions/img2.png", "./images/pastactions/img3.png", "./images/pastactions/img4.png", "./images/pastactions/img5.png"], 
    "actions2" : ["./images/actions2/img1.png","./images/actions2/img2.png", "./images/actions2/img3.png", "./images/actions2/img4.png", "./images/actions2/img5.png", "./images/actions2/img6.png", "./images/actions2/img7.png", "./images/actions2/img8.png", "./images/actions2/img9.png", "./images/actions2/img10.png", "./images/actions2/img11.png", "./images/actions2/img12.png", "./images/actions2/img13.png", "./images/actions2/img14.png", "./images/actions2/img15.png"], 
    "dailyactivities" : ["./images/dailyactivities/img1.png","./images/dailyactivities/img2.png", "./images/dailyactivities/img3.png", "./images/dailyactivities/img4.png", "./images/dailyactivities/img5.png", "./images/dailyactivities/img6.png", "./images/dailyactivities/img7.png", "./images/dailyactivities/img8.png", "./images/dailyactivities/img9.png", "./images/dailyactivities/img10.png", "./images/dailyactivities/img11.png", "./images/dailyactivities/img12.png", "./images/dailyactivities/img13.png", "./images/dailyactivities/img14.png", "./images/dailyactivities/img15.png", "./images/dailyactivities/img16.png", "./images/dailyactivities/img17.png"], 
    "frequency" : ["./images/frequency/img1.png","./images/frequency/img2.png", "./images/frequency/img3.png", "./images/frequency/img4.png"], 
    "body" : ["./images/body/img1.png","./images/body/img2.png", "./images/body/img3.png", "./images/body/img4.png", "./images/body/img5.png", "./images/body/img6.png", "./images/body/img7.png", "./images/body/img8.png", "./images/body/img9.png", "./images/body/img10.png", "./images/body/img11.png", "./images/body/img12.png"], 
    "clothes" : ["./images/clothes/img1.png","./images/clothes/img2.png", "./images/clothes/img3.png", "./images/clothes/img4.png", "./images/clothes/img5.png", "./images/clothes/img6.png", "./images/clothes/img7.png", "./images/clothes/img8.png", "./images/clothes/img9.png", "./images/clothes/img10.png"], 
    "buildings" : ["./images/buildings/img1.png","./images/buildings/img2.png", "./images/buildings/img3.png", "./images/buildings/img4.png", "./images/buildings/img5.png", "./images/buildings/img6.png", "./images/buildings/img7.png", "./images/buildings/img8.png", "./images/buildings/img9.png", "./images/buildings/img10.png", "./images/buildings/img11.png", "./images/buildings/img12.png", "./images/buildings/img13.png", "./images/buildings/img14.png", "./images/buildings/img15.png", "./images/buildings/img16.png", "./images/buildings/img17.png", "./images/buildings/img18.png", "./images/buildings/img19.png", "./images/buildings/img20.png", "./images/buildings/img21.png", "./images/buildings/img22.png", "./images/buildings/img23.png", "./images/buildings/img24.png", "./images/buildings/img25.png", "./images/buildings/img26.png", "./images/buildings/img27.png", "./images/buildings/img28.png", "./images/buildings/img29.png"], 
    "directions" : ["./images/directions/img1.png","./images/directions/img2.png", "./images/directions/img3.png", "./images/directions/img4.png", "./images/directions/img5.png", "./images/directions/img6.png", "./images/directions/img7.png"], 
    "locations" : ["./images/locations/img1.png","./images/locations/img2.png", "./images/locations/img3.png", "./images/locations/img4.png"], 
    "vehicles" : ["./images/vehicles/img1.png","./images/vehicles/img2.png", "./images/vehicles/img3.png", "./images/vehicles/img4.png", "./images/vehicles/img5.png", "./images/vehicles/img6.png", "./images/vehicles/img7.png", "./images/vehicles/img8.png", "./images/vehicles/img9.png", "./images/vehicles/img10.png"], 
    "school" : ["./images/school/img1.png","./images/school/img2.png", "./images/school/img3.png", "./images/school/img4.png", "./images/school/img5.png", "./images/school/img6.png", "./images/school/img7.png", "./images/school/img8.png", "./images/school/img9.png", "./images/school/img10.png", "./images/school/img11.png", "./images/school/img12.png", "./images/school/img13.png", "./images/school/img14.png", "./images/school/img15.png", "./images/school/img16.png"], 
    "subjects" : ["./images/subjects/img1.png","./images/subjects/img2.png", "./images/subjects/img3.png", "./images/subjects/img4.png", "./images/subjects/img5.png", "./images/subjects/img6.png", "./images/subjects/img7.png", "./images/subjects/img8.png", "./images/subjects/img9.png", "./images/subjects/img10.png", "./images/subjects/img11.png"],   
    "instruments" : ["./images/instruments/img1.png","./images/instruments/img2.png", "./images/instruments/img3.png", "./images/instruments/img4.png", "./images/instruments/img5.png", "./images/instruments/img6.png", "./images/instruments/img7.png", "./images/instruments/img8.png"],   
    "stationary" : ["./images/stationary/img1.png","./images/stationary/img2.png", "./images/stationary/img3.png", "./images/stationary/img4.png", "./images/stationary/img5.png", "./images/stationary/img6.png", "./images/stationary/img7.png", "./images/stationary/img8.png", "./images/stationary/img9.png", "./images/stationary/img10.png", "./images/stationary/img11.png", "./images/stationary/img12.png"],  
    "commonitems" : ["./images/commonitems/img1.png","./images/commonitems/img2.png", "./images/commonitems/img3.png", "./images/commonitems/img4.png", "./images/commonitems/img5.png", "./images/commonitems/img6.png", "./images/commonitems/img7.png", "./images/commonitems/img8.png", "./images/commonitems/img9.png", "./images/commonitems/img10.png", "./images/commonitems/img11.png", "./images/commonitems/img12.png", "./images/commonitems/img13.png", "./images/commonitems/img14.png", "./images/commonitems/img15.png", "./images/commonitems/img16.png", "./images/commonitems/img17.png", "./images/commonitems/img18.png", "./images/commonitems/img19.png", "./images/commonitems/img20.png", "./images/commonitems/img21.png", "./images/commonitems/img22.png", "./images/commonitems/img23.png", "./images/commonitems/img24.png", "./images/commonitems/img25.png", "./images/commonitems/img26.png", "./images/commonitems/img27.png", "./images/commonitems/img28.png"],    
    "activities" : ["./images/activities/img1.png","./images/activities/img2.png", "./images/activities/img3.png", "./images/activities/img4.png", "./images/activities/img5.png", "./images/activities/img6.png", "./images/activities/img7.png", "./images/activities/img8.png", "./images/activities/img9.png", "./images/activities/img10.png", "./images/activities/img11.png", "./images/activities/img12.png", "./images/activities/img13.png", "./images/activities/img14.png"],    
    "schoolevents" : ["./images/schoolevents/img1.png","./images/schoolevents/img2.png", "./images/schoolevents/img3.png", "./images/schoolevents/img4.png", "./images/schoolevents/img5.png", "./images/schoolevents/img6.png", "./images/schoolevents/img7.png", "./images/schoolevents/img8.png", "./images/schoolevents/img9.png", "./images/schoolevents/img10.png", "./images/schoolevents/img11.png", "./images/schoolevents/img12.png", "./images/schoolevents/img13.png"],     
    "yearlyevents" : ["./images/yearlyevents/img1.png","./images/yearlyevents/img2.png", "./images/yearlyevents/img3.png", "./images/yearlyevents/img4.png", "./images/yearlyevents/img5.png", "./images/yearlyevents/img6.png", "./images/yearlyevents/img7.png", "./images/yearlyevents/img8.png", "./images/yearlyevents/img9.png", "./images/yearlyevents/img10.png"],    
    "conditions" : ["./images/conditions/img1.png","./images/conditions/img2.png", "./images/conditions/img3.png", "./images/conditions/img4.png", "./images/conditions/img5.png", "./images/conditions/img6.png", "./images/conditions/img7.png", "./images/conditions/img8.png", "./images/conditions/img9.png", "./images/conditions/img10.png", "./images/conditions/img11.png", "./images/conditions/img12.png"],    
    "descriptions" : ["./images/descriptions/img1.png","./images/descriptions/img2.png", "./images/descriptions/img3.png", "./images/descriptions/img4.png", "./images/descriptions/img5.png", "./images/descriptions/img6.png", "./images/descriptions/img7.png", "./images/descriptions/img8.png", "./images/descriptions/img9.png", "./images/descriptions/img10.png", "./images/descriptions/img11.png", "./images/descriptions/img12.png", "./images/descriptions/img13.png", "./images/descriptions/img14.png", "./images/descriptions/img15.png"],    
    "jobs" : ["./images/jobs/img1.png","./images/jobs/img2.png", "./images/jobs/img3.png", "./images/jobs/img4.png", "./images/jobs/img5.png", "./images/jobs/img6.png", "./images/jobs/img7.png", "./images/jobs/img8.png", "./images/jobs/img9.png", "./images/jobs/img10.png", "./images/jobs/img11.png", "./images/jobs/img12.png", "./images/jobs/img13.png", "./images/jobs/img14.png", "./images/jobs/img15.png", "./images/jobs/img16.png", "./images/jobs/img17.png", "./images/jobs/img18.png", "./images/jobs/img19.png", "./images/jobs/img20.png", "./images/jobs/img21.png", "./images/jobs/img22.png", "./images/jobs/img23.png", "./images/jobs/img24.png", "./images/jobs/img25.png"],     
    "clubactivities" : ["./images/clubactivities/img1.png","./images/clubactivities/img2.png", "./images/clubactivities/img3.png", "./images/clubactivities/img4.png", "./images/clubactivities/img5.png", "./images/clubactivities/img6.png", "./images/clubactivities/img7.png", "./images/clubactivities/img8.png", "./images/clubactivities/img9.png", "./images/clubactivities/img10.png", "./images/clubactivities/img11.png", "./images/clubactivities/img12.png", "./images/clubactivities/img13.png", "./images/clubactivities/img14.png", "./images/clubactivities/img15.png", "./images/clubactivities/img16.png", "./images/clubactivities/img17.png", "./images/clubactivities/img18.png"],     
    "christmas" : ["./images/christmas/img1.png","./images/christmas/img2.png", "./images/christmas/img3.png", "./images/christmas/img4.png", "./images/christmas/img5.png", "./images/christmas/img6.png", "./images/christmas/img7.png", "./images/christmas/img8.png", "./images/christmas/img9.png", "./images/christmas/img10.png", "./images/christmas/img11.png", "./images/christmas/img12.png", "./images/christmas/img13.png", "./images/christmas/img14.png", "./images/christmas/img15.png", "./images/christmas/img16.png", "./images/christmas/img17.png", "./images/christmas/img18.png", "./images/christmas/img19.png", "./images/christmas/img20.png"],
    "autumnforest" : ["./images/autumnforest/img1.png","./images/autumnforest/img2.png", "./images/autumnforest/img3.png", "./images/autumnforest/img4.png", "./images/autumnforest/img5.png", "./images/autumnforest/img6.png", "./images/autumnforest/img7.png", "./images/autumnforest/img8.png", "./images/autumnforest/img9.png", "./images/autumnforest/img10.png", "./images/autumnforest/img11.png", "./images/autumnforest/img12.png", "./images/autumnforest/img13.png", "./images/autumnforest/img14.png"], 
    "goodmorning" : ["./images/goodmorning/img1.png","./images/goodmorning/img2.png", "./images/goodmorning/img3.png", "./images/goodmorning/img4.png", "./images/goodmorning/img5.png", "./images/goodmorning/img6.png", "./images/goodmorning/img7.png", "./images/goodmorning/img8.png", "./images/goodmorning/img9.png", "./images/goodmorning/img10.png", "./images/goodmorning/img11.png", "./images/goodmorning/img12.png", "./images/goodmorning/img13.png", "./images/goodmorning/img14.png", "./images/goodmorning/img15.png", "./images/goodmorning/img16.png", "./images/goodmorning/img17.png", "./images/goodmorning/img18.png", "./images/goodmorning/img19.png"], 
    "ABC" : ["./images/alphabet/img1.png","./images/alphabet/img2.png", "./images/alphabet/img3.png", "./images/alphabet/img4.png", "./images/alphabet/img5.png", "./images/alphabet/img6.png", "./images/alphabet/img7.png", "./images/alphabet/img8.png", "./images/alphabet/img9.png", "./images/alphabet/img10.png", "./images/alphabet/img11.png", "./images/alphabet/img12.png", "./images/alphabet/img13.png", "./images/alphabet/img14.png", "./images/alphabet/img15.png", "./images/alphabet/img16.png", "./images/alphabet/img17.png", "./images/alphabet/img18.png", "./images/alphabet/img19.png", "./images/alphabet/img20.png", "./images/alphabet/img21.png", "./images/alphabet/img22.png", "./images/alphabet/img23.png", "./images/alphabet/img24.png", "./images/alphabet/img25.png", "./images/alphabet/img26.png"], 
    "abc" : ["./images/alphabet/img27.png","./images/alphabet/img28.png", "./images/alphabet/img29.png", "./images/alphabet/img30.png", "./images/alphabet/img31.png", "./images/alphabet/img32.png", "./images/alphabet/img33.png", "./images/alphabet/img34.png", "./images/alphabet/img35.png", "./images/alphabet/img36.png", "./images/alphabet/img37.png", "./images/alphabet/img38.png", "./images/alphabet/img39.png", "./images/alphabet/img40.png", "./images/alphabet/img41.png", "./images/alphabet/img42.png", "./images/alphabet/img43.png", "./images/alphabet/img44.png", "./images/alphabet/img45.png", "./images/alphabet/img46.png", "./images/alphabet/img47.png", "./images/alphabet/img48.png", "./images/alphabet/img49.png", "./images/alphabet/img50.png", "./images/alphabet/img51.png", "./images/alphabet/img52.png"], 
}

const langObj = {
    "Feelings" : "気分", "Weather" : "天気", "Colors" : "色", "Shapes" : "形", "Sports" : "スポーツ", "Foods" : "食べ物", "Desserts" : "デザート", "Drinks" : "飲み物", 
    "Fruit and Veg" : "果物と野菜", "Ingredients" : "食材", "Meals" : "食事",  "Tastes" : "味など", "Animals" : "動物", "Sea Animals" : "海の生き物", "Bugs" : "虫", "Nature" : "自然", 
    "Months" : "月", "Seasons" : "季節", "Times" : "一日の時間", "Days" : "曜日", "Countries" : "国", "Family" : "家族", "People" : "人", "Personalities" : "性格など", 
    "Actions 1" : "動作など 1", "Past Actions" : "したこと", "Actions 2" : "動作など 2", "Daily Activities" : "一日の生活", "Frequency" : "頻度", "Body" : "からだ", "Clothes" : "衣類", 
    "Buildings" : "建物など", "Directions" : "道案内", "Locations" : "位置", "Vehicles" : "乗り物", "School" : "学校", "Subjects" : "教科", "Instruments" : "楽器", 
    "Stationary" : "文房具", "Common Items" : "日常生活", "Activities" : "遊びなど", "School Events" : "学校行事", "Yearly Events" : "年中行事", "Conditions" : "状態", 
    "Descriptions" : "様子", "Jobs" : "職業", "Club Activities" : "部活動", "Christmas" : "クリスマス", "Autumn Forest" : "秋の森の中", "Good Morning": "おはよう", "Clear All" : "削除"
}

function getLangKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value)
}

function language() {
    let allTopicButtons = document.querySelectorAll(".language")
    allTopicButtons.forEach( (x)=>{
        let enText = x.textContent
        if ( lang === "en" ) {
            x.textContent = langObj[enText]
        } else {
            x.textContent = getLangKey(langObj,enText)
        }
    })
    if ( lang === "en" ) {
        lang = "jpn"
        document.getElementById("game-buttons").style.fontSize = "2rem"
        clearBtn.style.fontSize = "2rem"
        renderBtn.style.fontSize = "2rem"
        if ( gameActive ) {
            renderBtn.textContent = "リセっト"
        } else {
            renderBtn.textContent = "スタート"
        }
        if ( !gameLeader && !readyForBingo ) {
            readyBtn.textContent = "準備まだ"
        } else if ( !gameLeader && readyForBingo ) {
            readyBtn.textContent = "準備OK"
        }
    } else {
        lang = "en"
        clearBtn.style.fontSize = "2.5rem"
        renderBtn.style.fontSize = "2.5rem"
        if ( !gameActive ) {
            renderBtn.textContent = "Begin the Game"
        } else {
            renderBtn.textContent = "Reset"
        }
        if ( !readyForBingo && !gameLeader ) {
            readyBtn.textContent = "NOT READY"
        } else if ( readyForBingo && !gameLeader ) {
            readyBtn.textContent = "READY"
        }
    }
}

const enJpn = document.getElementById("en-jpn")
const clearBtn = document.getElementById("clear")
const renderBtn = document.getElementById("render-btn")
const readyBtn = document.querySelector(".bingo-ready")
const leaderBtn = document.querySelector(".bingo-leader")
const allSelectButtons = document.querySelectorAll(".imageSelect")

allSelectButtons.forEach( (x) => {
    x.addEventListener("click",()=>{
        let tag = x.getAttribute("id")
        beginSelection( selectObj[tag] )
    })
})

function beginSelection(arr) {
    if (!selectionOpen) {
        reSelect(arr)
        renderSelect("select-container", arr)
        selectionOpen = true
    }
}

function reSelect(arr) {
    selectArr = activeArr.filter( (x) => arr.includes(x) )
    activeArr = activeArr.filter( (x) => !arr.includes(x) )
}

function renderSelect(targetDiv, arr){
    gameBtnDisplay.className = "hide-me"
    topicBtnDisplay.className = "hide-me"
    let currentDiv = document.getElementById(targetDiv)
    if ( lang === "en" ) {
        currentDiv.innerHTML = `<div class="inner-btn-menu"><button id="selectall" onClick="selectAll()">All</button><button id="clearselection" onClick="selectClear()">Clear</button><button id="closewindow" onClick="passSelect()">Confirm and Go Back</button></div>`
    } else {
        currentDiv.innerHTML = `<div class="inner-btn-menu"><button id="selectall" onClick="selectAll()">全て</button><button id="clearselection" onClick="selectClear()">削除</button><button id="closewindow" onClick="passSelect()">承認して戻る</button></div>`
    }
        for ( let i = 0; i < arr.length; i++) {
    currentDiv.innerHTML += `<div class="img-box"><img class="select-img unselected" src="${arr[i]}"></div>`
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let reselectImg = img.getAttribute("src")
        if (selectArr.includes(reselectImg) ) {
            img.classList.add("selected")
            img.classList.remove("unselected")
        }
        img.addEventListener("click",function() {
            let currentImg = img.getAttribute("src")
            if ( img.classList.contains("unselected") ) {
                currentImg = img.getAttribute("src")
                selectArr.push(currentImg)
                img.classList.add("selected")
                img.classList.remove("unselected")
            } else {
                currentImg = img.getAttribute("src")
                let deselectNum = selectArr.indexOf(currentImg)
                let deselector = selectArr.splice( deselectNum, 1)
                img.classList.remove("selected")
                img.classList.add("unselected")
            }
        }) 
    })
    } 
}

function selectAll() {
    selectArr = []
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let currentImg = img.getAttribute("src")
        selectArr.push(currentImg)
        img.classList.add("selected")
        img.classList.remove("unselected")
    })
}

function selectClear() {
    selectArr = []
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let currentImg = img.getAttribute("src")
        img.classList.remove("selected")
        img.classList.add("unselected")
    })
}

function passSelect() {
    activeArr = activeArr.concat(selectArr)
    selectArr = []
    let currenterDiv = document.getElementById("select-container")
    currenterDiv.innerHTML = ""
    selectionOpen = false
    gameBtnDisplay.className = ""
    topicBtnDisplay.className = ""
}

enJpn.addEventListener("click",language)

renderBtn.addEventListener("click", function() {
    if (activeArr.length >= 4 && !gameActive) {
        renderGame(activeArr)
        if ( lang === "en" ) {
            renderBtn.textContent = "RESET"
        } else {
            renderBtn.textContent = "リセット"
        }
    } else if ( gameActive ) {
        renderGame(activeArr)
    }
})

clearBtn.addEventListener("click",function(){
    clearAll()
})

readyBtn.addEventListener("click",()=>{
    if ( readyForBingo && !gameLeader) {
        beginBingo()
    } else if ( gameLeader ) {
        nextImage()
    }
})

leaderBtn.addEventListener("click",leadGame)

function dragStart(event) {
    if ( !bingoActive ) {
        draggedItem = event.target
        inputImage = draggedItem.getAttribute("src")
        if ( inputArr.includes(inputImage) ) {
            let fullGridBoxes = document.querySelectorAll(".full")
            fullGridBoxes.forEach( (box)=>{
                let thisBox = box.firstChild
                if ( thisBox.getAttribute("src") === inputImage ) {
                    box.classList.add("warning")
                    setTimeout( ()=>{
                        box.classList.remove("warning")
                    },1500)
                }
            })
        } else {
            selectedImage = inputImage
            beingDragged = true
            draggedItem = ""
        }
    }
}

function dragOver(event) {
    event.preventDefault()
}

function moveBingoImage(event) {
    sourceBox = event.target.parentElement
    draggedItem = event.target
    inputImage = draggedItem.getAttribute("src")
    selectedImage = inputImage
    beingDragged = true
    movingCurrentImage = true
    draggedItem = ""
}

function renderGame(arr){
    if ( !topicBtnDisplay.classList.contains("hide-me") ) {
        topicBtnDisplay.classList.add("hide-me")
    }
    if ( !bingoScreen.classList.contains("reduced") ) {
        bingoScreen.classList.add("reduced")
    }
    if ( bingoContainer.classList.contains("reduced") ) {
        bingoContainer.classList.remove("reduced")
        bingoSelectionOuter.classList.remove("reduced")
    }
    if ( bingoGrid.classList.contains("leader-window") ) {
        bingoGrid.classList.remove("leader-window")
    }
    bingoScreen.innerHTML = ""
    inputArr = []
    selectedBox = ""
    selectedImage = ""
    boxSelected = false
    imageSelected = false
    bingoImageSeen = false
    readyForBingo = false
    gameLeader = false
    gameActive = true
    bingoActive = false
    if ( lang === "en" ) {
        readyBtn.textContent = "NOT READY"
        renderBtn.textContent = "RESET"
    } else {
        readyBtn.textContent = "準備まだ"
        renderBtn.textContent = "リセット"
    }
        bingoSelection.innerHTML = ""
    for ( let i = 0; i < activeArr.length; i++ ) {
        bingoSelection.innerHTML += `<div class="bingo-selection-box"><img class="bingo-selection-image" src="${arr[i]}"></div>`
    }
    bingoGrid.innerHTML = ""
    for ( let i = 0; i < gameType; i++ ) {
        bingoGrid.innerHTML += `<div class="bingo-grid-box empty"></div>`
    }

    gameContainer.classList.remove("reduced")
    let selectionImages = document.querySelectorAll(".bingo-selection-image")

    selectionImages.forEach( (x) => {
        x.addEventListener("dragstart",dragStart)
    })
    let bingoGridBoxes = document.querySelectorAll(".bingo-grid-box")
    bingoGridBoxes.forEach( (box)=>{
        box.addEventListener("click",()=>{
            thisBox = box
            if ( thisBox.innerHTML != "" ) {
                let removeImg = thisBox.firstChild.getAttribute("src")
                cleanUp(thisBox,removeImg)
                checkReadyImages(inputArr.length)
            }
        })
    })
    bingoGridBoxes.forEach( (box) => {
        box.addEventListener("dragover",dragOver)
        box.addEventListener("drop",(event)=>{
            if ( beingDragged && !movingCurrentImage) {
                thisBox = box
                if ( thisBox.innerHTML != "" ) {
                    let removeImg = thisBox.firstChild.getAttribute("src")
                    cleanUp(thisBox,removeImg)
                    checkReadyImages(inputArr.length)
                }
                if ( selectedImage != "" ) {
                    thisBox.innerHTML = `<img class="bingo-image" src="${selectedImage}">`
                    let allBingoImages = document.querySelectorAll(".bingo-image")
                    allBingoImages.forEach( (bingoImage) =>{
                        bingoImage.addEventListener("dragstart",moveBingoImage)
                    })
                    thisBox.classList.remove("empty")
                    thisBox.classList.add("full")
                    inputArr.push(selectedImage)
                    selectedImage = ""
                    beingDragged = false
                    checkReadyImages(inputArr.length)
                }
            } else if ( beingDragged && movingCurrentImage ) {
                thisBox = box
                if ( thisBox.innerHTML != "" ) {
                    let removeImg = thisBox.firstChild.getAttribute("src")
                    cleanUp(thisBox,removeImg)
                    checkReadyImages(inputArr.length)
                }
                thisBox.innerHTML = `<img class="bingo-image" src="${selectedImage}">`
                    let allBingoImages = document.querySelectorAll(".bingo-image")
                    allBingoImages.forEach( (bingoImage) =>{
                        bingoImage.addEventListener("dragstart",moveBingoImage)
                    })
                    thisBox.classList.remove("empty")
                    thisBox.classList.add("full")
                    sourceBox.innerHTML = ""
                    sourceBox.classList.remove("full")
                    sourceBox.classList.add("empty")
                    sourceBox = ""
                    selectedImage = ""
                    beingDragged = false
                    movingCurrentImage = false
                    checkReadyImages(inputArr.length)
            }
        })
    })
}

function cleanUp(target,image){
    target.innerHTML = ""
    target.classList.remove("full")
    target.classList.add("empty")
    let index = inputArr.indexOf(image)
    inputArr.splice(index,1)
}

function checkReadyImages(len) {
    if ( len === gameType ) {
        readyForBingo = true
        if ( lang === "en" ) {
            readyBtn.textContent = "READY"
        } else {
            readyBtn.textContent = "準備OK"
        }
    } else {
        readyForBingo = false
        if ( lang === "en" ) {
            readyBtn.textContent = "NOT READY"
        } else {
            readyBtn.textContent = "準備まだ"
        }
    }
}

function beginBingo() {
    bingoActive = true
    bingoSelectionOuter.classList.add("reduced")
    bingoContainer.classList.add("reduced")
    let tempArr = []
    for ( let i = 0; i < bingoGrid.children.length; i++ ) {
        tempArr.push(bingoGrid.children[i].innerHTML)
    }
    bingoGrid.innerHTML = ""
    for ( let i = 0; i < gameType; i++ ) {
        bingoScreen.innerHTML += `<div class="bingo-screen-grid-box">${tempArr[i]}</div>`
    }
    bingoScreen.classList.remove("reduced")
    bingoGame()
}

function bingoGame() {
    bingoActive = true
    let allBingo = document.querySelectorAll(".bingo-screen-grid-box")
    allBingo.forEach( (x)=>{
        x.addEventListener("click",()=>{
            if ( !x.classList.contains("selected-image") ) {
                x.classList.add("selected-image")
            } else {
                x.classList.remove("selected-image")
            }
        })
    })
}

function leadGame() {
    gameLeader = true
    bingoActive = true
    currentBingoImage = 0
    if ( bingoImageSeen ) {
        let seenImages = document.querySelectorAll(".bingo-seen-image")
        seenImages.forEach( (x) => {
            x.classList.remove("bingo-seen-image")
        })
    }
    bingoImageSeen = false
    readyForBingo = false
    readyBtn.textContent = "NEXT IMAGE"
    bingoGrid.innerHTML = ""
    bingoGrid.classList.add("leader-window")
    bingoArr = activeArr.slice(0,activeArr.length)
    bingoArr = bingoArr.sort( ()=> {return 0.5 - Math.random() } )
}

function nextImage() {
    if ( currentBingoImage < bingoArr.length ) {
        bingoGrid.innerHTML = `<div class="leader-window"><img class="leader-image" src="${bingoArr[currentBingoImage]}"></div>`
        let allSelectionImages = document.querySelectorAll(".bingo-selection-image")
        allSelectionImages.forEach( (x) => {
            if ( x.getAttribute("src") === bingoArr[currentBingoImage] ) {
                x.classList.add("bingo-seen-image")
                bingoImageSeen = true
            }
        })
        currentBingoImage++
        if ( currentBingoImage === bingoArr.length ) {
            readyBtn.textContent = "GAME OVER"
        }
    }
}

function clearAll() {
    gameContainer.classList.add("reduced")
    if ( bingoGrid.classList.contains("leader-window") ) {
        bingoGrid.classList.remove("leader-window")
    }
    if ( lang === "en" ) {
        renderBtn.textContent = "Begin the Game"
    } else {
        renderBtn.textcontent = "スタート"
    }
    let selectDiv = document.getElementById("select-container")
    selectDiv.innerHTML = ""
    bingoSelection.innerHTML = ""
    activeArr = []
    selectArr = []
    gameActive = false
    bingoActive = false
    selectedBox = ""
    selectedImage = ""
    selectionObj = {}
    boxSelected = false
    imageSelected = false
    bingoImageSeen = false
    imagesReady = 0
    currentBingoImage = 0
    topicBtnDisplay.classList.remove("hide-me")
    document.querySelectorAll(".toggleOn").forEach( (x) => {
        x.classList.remove("toggleOn")
        x.classList.add("toggleOff")
    })
}
