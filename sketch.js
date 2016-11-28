var nations;
var myFont;

var inputRange = 0;
var inputMouse = 0;
  //setting the variables for the inputs of the mouse

var colors = [];



function preload(){
   
   nations = loadJSON("nationData.json");
   myFont = loadFont("VertigoPlusFLF-Bold.ttf");
}

function setup() {
 
 colors = [color(149,61,92),color(53,70,79),color(9,69,75),color(20,11,60),color(240,96,96)];
 createCanvas(1500,1000);
 angleMode(DEGREES);
  inputRange = width/2
    //this specifies the input of the range at 750
}


function draw() {
   
   background(100);
   noStroke();
   
   textSize(35);
   fill('white');
   
   text("How Income Affects Life Expectancy",700,50)
   text("<- ->",700,90)
   
   push();
   translate(80,500);
   rotate(-90);
   text("Life Expectancy",0,0);
   pop();
  
   
   
   text("Income",600,850);
   
   textFont(myFont);
   
    inputMouse = constrain(mouseX,width/2,width) - width/2;
      //this constrains the mouse from moving on the xpos from 750 - 1500
   
   textSize(150);
   textAlign(CENTER);
   stroke('black');
   fill('white');
   text(floor(map(inputMouse,0,width/2,1800,2009)),width* 0.8,height* 0.8);
    //this is to floor and map the mouseScrub to the range of years, and shows  the text on screen
    
    
   textSize(20);
   stroke('white');
   textAlign(CENTER);
   fill('white');
   
      
   for(var i = 0;i < 162;i++){
      var tempY = dataReturn(i,"lifeExpectancy",height-20,0,inputMouse,inputRange);
      var tempX = dataReturn(i,"income",150,800,inputMouse,inputRange);
      //fill(i*2,200 - (i*3),i*4,225);
      dataEllipse(tempX,tempY,i,"population",15,25,inputMouse,inputRange);
      //this accesess the information from the created function, and looks as follows
      //dataEllipse(xpos, ypos, country#, "property", min circle size, max circle size, and the mapping to where the mouse starts and the range);
   
   }
   
   fill('white');
   line(100,50,100,800);
   line(100,800,1000,800);
   //draw the horizontal tick marks, set i equal to the start, and the i+= to the spacing
   for(var i = 150; i < 1000; i+=50){
     
      line(i,750,i,800);
      
      //map the i value to an actual income
      
      var incomeNumber = round(map(i,150,1000,0,100));
      push();
      translate(i-5,775);
      rotate(-90);
      text(incomeNumber + " K",0,0);
      pop();
   }
   
   //this is for the year numbers and tick marks
   textSize(18);
   
   for (var y = 750; y > 0; y-=50) {
     line(100, y, 150, y);
     
     var ageNumber = round(map(y,5,800,95,0));
     
     push();
     translate(135, y-5);
     rotate();
     text(ageNumber + " Years", 0,0);
     pop();
   }
     
   
   
   /*
   fill('pink');
    dataEllipse(tempX,height/2,135,"population",0,400,inputMouse,inputRange);
    */
    
   
   
   //LABELS
  /*
   textAlign(RIGHT);
   fill(255);
   text("ANGOLA",150,height/2);
   
   textAlign(RIGHT);
   fill(255);
   text("POLAND",150,height/6);
   
      textSize(50); 
      textAlign(CENTER);
      fill(255);
      text("Population",width* .25, height* .75);
      
          
      textAlign(CENTER);
      fill(255);
      text("Life Expectancy",width* .5, height* .75);
      
      textAlign(CENTER);
      fill(255);
      text("Income",width* .75, height* .75);
   
   
   textSize(40);
   */
   //POPULATIONS
   /*
   var angolaPopLength = nationData[0].population.length - 1;
      //figures how many population entries
   var polandPopLength = nationData[135].population.length - 1;
      //finding population entries for Poland
      
   
   var inputPopAngola = map(mouseX, 0, width, 0, angolaPopLength);
      inputPopAngola = floor(inputPopAngola);
      inputPopAngola = constrain(inputPopAngola, 0, angolaPopLength);
      //this both maps it to the number of population entries for angola, floors the numbers so there are no decimals, and constrains
   
   
   var inputPopPoland = map(mouseX, 0, width, 0, polandPopLength);
      inputPopPoland = floor(inputPopPoland);
      inputPopPoland = constrain(inputPopPoland, 0, inputPopPoland);
      
   
   var angolaPop = nationData[0].population[inputPopAngola][1];
      //nationData[country].property[entry#][year,value]
   var polandPop = nationData[135].population[inputPopPoland][1];
   
     
   println(polandPop);
  
  
  //DRAWING THE CIRCLES
  
  //ANGOLA POPULATION
   angolaPop = map(angolaPop,0,12707546,0,250);
      fill(50,215,100);
      ellipse(width* .25, height/2, angolaPop,angolaPop);
      
      textAlign(CENTER);
      fill(255);
      text(nationData[0].population[inputPopAngola][1],width* .25, height/2);
  
      
   polandPop = map(polandPop,0,38500696,0,250);
      fill(50,100,215);
      ellipse(width* .25, height/6, polandPop,polandPop);
      
      textAlign(CENTER);
      fill(255);
      text(nationData[135].population[inputPopPoland][1], width* .25, height/6);
      
   //LIFE EXPECTANCY
   
   var inputLifeLengthAngola = nationData[0].lifeExpectancy.length - 1;
      //how many life expectancy entries for angola
   var inputLifeLengthPoland = nationData[135].lifeExpectancy.length - 1;
   
   
   var inputLifeAngola = map(mouseX, 0, width, 0, inputLifeLengthAngola);
      inputLifeAngola = floor(inputLifeAngola);
      inputLifeAngola = constrain(inputLifeAngola, 0, inputLifeLengthAngola);
      
   
   var inputLifePoland = map(mouseX, 0, width, 0, inputLifeLengthPoland);
      inputLifePoland = floor(inputLifePoland);
      inputLifePoland = constrain(inputLifePoland, 0, inputLifeLengthPoland);
      
   
   var angolaLife = nationData[0].lifeExpectancy[inputLifeAngola][1];
   var polandLife = nationData[135].lifeExpectancy[inputLifePoland][1];
   
   //DRAWING THE CIRCLES
   
   angolaLife = map(angolaLife, 0, 50, 0, 250);
      fill(100,255,175);
      ellipse(width* .5, height/2, angolaLife, angolaLife);
      
      textAlign(CENTER);
      fill(255);
      text(nationData[0].lifeExpectancy[inputLifeAngola][1], width* .5, height/2);
      
      
   polandLife = map(polandLife, 0, 80, 0, 250);
      fill(100,175,255);
      ellipse(width* .5, height/6, polandLife,polandLife);
      
      textAlign(CENTER);
      fill(255);
      text(nationData[135].lifeExpectancy[inputLifePoland][1], width* .5, height/6);
      
      
   //INCOME
   
   var inputAngolaIncomeLength = nationData[0].income.length - 1;
   var inputPolandIncomeLength = nationData[135].income.length - 1;
   
   var inputIncomeAngola = map(mouseX, 0, width, 0, inputAngolaIncomeLength);
      inputIncomeAngola = floor(inputIncomeAngola);
      inputIncomeAngola = constrain(inputIncomeAngola, 0, inputAngolaIncomeLength);
      
   var inputIncomePoland = map(mouseX, 0, width, 0, inputPolandIncomeLength);
      inputIncomePoland = floor(inputIncomePoland);
      inputIncomePoland = constrain(inputIncomePoland, 0, inputPolandIncomeLength);
      
  
   var angolaIncome = nationData[0].income[inputIncomeAngola][1];
   var polandIncome = nationData[135].income[inputIncomePoland][1];
   
   //DRAWING CIRCLES
   
   angolaIncome = map(angolaIncome, 0, 5056, 0, 250);
      fill(100,255,175);
      ellipse(width* .75, height/2, angolaIncome, angolaIncome);
      
      textAlign(CENTER);
      fill(255);
      text(nationData[0].income[inputIncomeAngola][1], width* .75, height/2);
      
   polandIncome = map(polandIncome, 0, 16466, 0, 250);
      fill(175,190,255);
      ellipse(width* .75, height/6, polandIncome, polandIncome);
      
      textAlign(CENTER);
      fill(255);
      text(nationData[135].income[inputIncomePoland][1], width* .75, height/6);
   
   
   
   //println(inputAngolaIncome);
*/
}

function dataEllipse(xpos,ypos,nationNumber,property,minSize,maxSize,inputPos,inputMax){
  
  var category = "nations[" + nationNumber + "]." + property;
    //this is to create a shortcut access using concatenating (+) to add together strings and characters
    
  var inputPropLength = eval(category + ".length -1");
    //this is accessing the total number of arrays within the property
    
  var inputProp = map(inputPos,0,inputMax,0,inputPropLength);
    inputProp = floor(inputProp);
    inputProp = constrain(inputProp,0,inputPropLength);
      //taking the value of x and mapping it to the population number
  
  var propName = "region";
  var region = eval("nations[" + nationNumber + "]." + propName);
  
  switch(region){
    case "America":
      fill(colors[0]);
    break;
      
    case "Europe & Central Asia":
      fill(colors[4]);
    break;
    
    case "Sub-Saharan Africa":
      fill(colors[1]);
    break;
    
    case "Middle East & North Africa":
      fill(colors[2]);
    break;
    
    case "East Asia & Pacific":
      fill(colors[3]);
    break;
    
    case "South Asia":
      fill(colors[3]);
    break;
    
    default:
      fill(0);
    break;
  }
  
    
  var visualizeProp = eval(category + "[inputProp][1]");
  
    visualizeProp = map(visualizeProp,0,140000000,minSize,maxSize);
    
      ellipse(xpos,ypos,visualizeProp,visualizeProp);
      
      fill(0);
      //text(eval(category + "[inputProp][1]"),xpos,ypos);
      
}

function dataReturn(nationNumber,property,minRange,maxRange,inputPos,inputMax){
  
   
  var category = "nations[" + nationNumber + "]." + property;
    //this is to create a shortcut access using concatenating (+) to add together strings and characters
    
  var inputPropLength = eval(category + ".length -1");
    //this is accessing the total number of arrays within the property
    
  var inputProp = map(inputPos,0,inputMax,0,inputPropLength);
    inputProp = floor(inputProp);
    inputProp = constrain(inputProp,0,inputPropLength);
  
  //THis grabs the actual value out of the json table
  var visualizeProp = eval(category + "[inputProp][1]");
  
  var propertyMax = 0;
  
    if(property == "lifeExpectancy"){
      propertyMax = 90; 
      visualizeProp = map(visualizeProp,0,propertyMax,minRange,maxRange);
    }
    
    if(property == "income"){
      propertyMax = 100000;
      
      //calculate the total visual space for the income
      var totalRange = maxRange - minRange;
      var lowerTwoThirds = minRange + (totalRange * .66);
      
      /*
      println("min " + minRange);
      println("max " + maxRange);
      println("total " + totalRange);
      println("third " + lowerTwoThirds);
      */
      if(visualizeProp < 20000){
        //spread out the income over the first two thirds
        visualizeProp = map(visualizeProp,0,20000,minRange,lowerTwoThirds);
      }
      if(visualizeProp > 20000){
      visualizeProp = map(visualizeProp,20000,propertyMax,lowerTwoThirds,maxRange);
      }
    }
  
    
    
        return visualizeProp;
}