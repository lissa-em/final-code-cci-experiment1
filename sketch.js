
    //JAVASCRIPT RUBBISH//

    let port; // to connect to arduino
    let connectBtn; //allow the button to exist
    let myVal = 0; // potentiometer 1 reading
    let r, r2, r3, g;
    let glitch_height, glitch_width, glitch_posx, glitch_posy;
    let glitchInterval = 0;
    //RUNNING ONCE//
    
    function setup() {

      createCanvas(600, 600);
      background(0);
      fill(255);
      textSize(30);
      textFont('Courier New');
      text("slowly turn the dial to start",40,300);
      //to connect to arduino
      port = createSerial();
      connectBtn = createButton('Begin');
      connectBtn.position(275, 650);
      connectBtn.mousePressed(connectBtnClick);


    // for scrollong text that doesnt work
      // i = 50; 
    // reveal = 500;
    }
    
    //RUNNING LOTS//
    
    function draw() {
    
      // Read data from Arduino
      let val = port.readUntil("\n"); // read each line
      if (val) {
        myVal = int(val.trim()); // Convert to an integer and remove any extraneous whitespace
        console.log("Received value: ", myVal); // Log the potentiometer value    
      }

//all the glitch stuff there's so much

    // genuinely fuck javascript
    initializeGlitchVariables();
    
    // Glitch initialization function
    function initializeGlitchVariables() {
      r = random(0, 255);
      r2 = random(0, 255);
      r3 = random(0, 255);
      g = random(0, 200);
      glitch_height = random(2, 50);
      glitch_width = random(5, 600);
      glitch_posx = random(0, 600);
      glitch_posy = random(0, 600);
    }

    // Glitch effect function
    function glitch() {
  noStroke();
  fill(r, g, 0);
  rect(glitch_posx, glitch_posy, glitch_width, glitch_height);
    }
    
    //make it glitch
    if (myVal > 16 && myVal < 19 ) {
      glitchInterval += 1;  
      if (glitchInterval % 5 === 0) {  
          glitch(); 
      }
    }

    //why the hell did it need all of that

      //adding this here so I can minimise all the scene changes
      //so i dont have to scroll as much 
      //also i like functions
    setTimeout(allScenes, 0);
    
    // Update button label based on connection status
      connectBtn.html(port.opened() ? 'Disconnect' : 'Begin');
    
    } // main draw loop close




    
        //MY FUNCTIONS//
    
      //Where the actual game is running (ish)
      function allScenes(){
        if (myVal === 0){
          background(0);
          every(2).seconds
          .show(zero);
        }if (myVal === 1){           //Scene 1
          happy_face1()
          every(2).seconds
          .show (Text_Delay_Green)
          .show (Scene1_Line1)
          .show (Scene1_Line2)
          .show (Text_Delay_Green);

        } else if (myVal === 2){
          mid_face1()
          every(2).seconds
          .show (Text_Delay_Yellow)
          .show (Scene1_Line3)
          .show (Scene1_Line4)
          .show (Text_Delay_Yellow);

        } else if (myVal === 3){
          angry_face1()
          every(2).seconds
          .show (Text_Delay_Red)
          .show (Scene1_Line5);
        } else if (myVal === 4){    //Scene 2
          happy_face2()
          every(2).seconds
          .show (Text_Delay_Green)
          .show (Scene2_Line1,4)
          .show (Scene2_Line2,4)
          .show (Scene2_Line3,4)
          .show (Text_Delay_Green);
        } else if (myVal === 5){
          mid_face1()
          every(2).seconds
          .show (Text_Delay_Yellow)
          .show (Scene2_Line4,4)
          .show (Scene2_Line5,4);
        } else if (myVal === 6){    //Scene 3
          happy_face1()
          every(2).seconds
          .show (Text_Delay_Green)
          .show (Scene3_Line1,4)
          .show (Scene3_Line2,4)
          .show (Scene3_Line3,4);
        } else if (myVal === 7){
          angry_face2()
          every(2).seconds
          .show (Text_Delay_Red)
          .show (Scene3_Line4,4);
        } else if (myVal === 8){    //Scene 4
          happy_face2()
          every(4).seconds
          .show (Text_Delay_Green)
          .show (Scene4_Line1,4);
        } else if (myVal === 9){
          happy_face1()
          every(2).seconds
          .show (Text_Delay_Green)
          .show (Scene4_Line2,4)
          .show (Scene4_Line3,4);
        } else if (myVal === 10){
          happy_face3()
          every(2).seconds
          .show (Text_Delay_Green)
          .show (Scene4_Line4,4)
          .show (Scene4_Line5,4)
          .show (Scene4_Line6,4);
        } else if (myVal === 11){
          angry_face2()
          every(2).seconds
          .show (Text_Delay_Red)
          .show (Scene4_Line7,4);
        } else if (myVal === 12){   //Scene 5
          happy_face2()
          every(2).seconds
          .show (Text_Delay_Green)
          .show (Scene5_Line1,4)
          .show (Scene5_Line2,4);
        } else if (myVal === 13){   //Scene 6 
          mid_face1()
          every(2).seconds
          .show (Scene6_Line1,4)
          .show (Scene6_Line2,4)
          .show (Scene6_Line3,4);
        } else if (myVal === 14){   //Scene7 LOADING
          mid_face1()
          every(2).seconds
          .show (Scene7_Line1)
          .show (Scene7_Line2)
          .show (Scene7_Line3);

        } else if (myVal === 15){   //Scene 8
          mid_face2()
          every(2).seconds
          .show (Scene8_Line1)
          .show (Scene8_Line2);
        } else if (myVal === 16){   //Scene 9
          angry_face1()
          every(2).seconds
          .show (Scene9_Line1,2)
          .show (Scene5_Line2,0.1)
          .show (Scene9_Line2,2)
          .show (Scene2_Line2,0.2)
        } else if (myVal > 16 && myVal < 19 ){   //scene 10
          glitch_face()
          every(2).seconds
          .show(Scene10_Line1);
        } else if (myVal === 19){   //scene 11
          dead_face();
          every(2).seconds
          .show (Scene11_Line1);
        } 
     }


    
                            //THE FACES

       //Happy face
      function happy_face1(){
        //Smile
        background(200, 255, 200); 
        //Border
        stroke('green');
        strokeWeight(3);
        noFill();
        square(30, 30, 540);
        //Eyes
        noStroke();
        fill('green');
        square(130, 130, 70);
        square(400, 130, 70);
        //Mouth
        noStroke();
        fill('green');
        square(90, 300, 60);
        rect(150, 360, 300, 60);
        square(450, 300, 60);
        //Textbox
        stroke(230, 255, 232);
        fill(230, 255, 232);
        rect(50, 500, 500, 60);
    
      }   
        //Happy face 2
      function happy_face2(){
          //Smile
          background(200, 255, 200); 
          //Border
          stroke('green');
          strokeWeight(3);
          noFill();
          square(30, 30, 540);
          //Eyes
          noStroke();
          fill('green');
          square(130, 110, 70);
          square(400, 110, 70);
          //Mouth
          noStroke();
          fill('green');
          square(90, 290, 60);
          rect(150, 350, 300, 80);
          square(450, 290, 60);
          //textbox
          stroke(230, 255, 232);
          fill(230, 255, 232);
          rect(50, 500, 500, 60);
    
      } 
        //Happy face side look
      function happy_face3(){
          //Smile
          background(200, 255, 200); 
          //Border
          stroke('green');
          strokeWeight(3);
          noFill();
          square(30, 30, 540);
          //Eyes
          noStroke();
          fill('green');
          square(170, 110, 70);
          square(440, 110, 70);
          //Mouth
          noStroke();
          fill('green');
          square(90, 290, 60);
          rect(150, 350, 300, 80);
          square(450, 290, 60);
          //textbox
          stroke(230, 255, 232);
          fill(230, 255, 232);
          rect(50, 500, 500, 60);
    
      } 
        //mid face 
      function mid_face1(){
          //Smile
          background(224, 221, 155); 
          //Border
          stroke(181, 174, 43);
          strokeWeight(3);
          noFill();
          square(30, 30, 540);
          //Eyes
          noStroke();
          fill(181, 174, 43);
          square(130, 130, 70);
          square(400, 130, 70);
          //Mouth
          noStroke();
          fill(181, 174, 43);
          rect(150, 320, 300, 60);

          //Textbox
          stroke(240, 238, 201);
          fill(240, 238, 201);
          rect(50, 500, 500, 60);
    
    
      } 
        //mid face 2 
      function mid_face2(){
          //Smile
          background(224, 221, 155); 
          //Border
          stroke(181, 174, 43);
          strokeWeight(3);
          noFill();
          square(30, 30, 540);
          //Eyes
          noStroke();
          fill(181, 174, 43);
          square(130, 130, 70);
          square(400, 130, 70);
          //Mouth
          noStroke();
          fill(181, 174, 43);
          square(90, 400, 60);
          rect(150, 340, 300, 60);
          square(450, 400, 60);

          //Textbox
          stroke(240, 238, 201);
          fill(240, 238, 201);
          rect(50, 500, 500, 60);
      } 
        //angry face 
      function angry_face1(){
          //Smile
          background(223, 114, 114); 
          //Border
          stroke(172,0,0);
          strokeWeight(3);
          noFill();
          square(30, 30, 540);
          //Eyes
          noStroke();
          fill(172,0,0);
          square(130, 150, 70);
          square(400, 150, 70);
          //Eyebrows
          stroke(172,0,0);
          strokeWeight(40);
          strokeCap(SQUARE);
          line(120,110, 220,140);
          line(390,140, 480,110);
          //Mouth
          noStroke();
          fill(172,0,0);
          square(90, 400, 60);
          rect(150, 340, 300, 60);
          square(450, 400, 60);
          //Textbox
          noStroke();
          fill(255, 177, 177);
          rect(50, 500, 500, 60);
    
    
      } 
        //angry face evil
      function angry_face2(){
        //Smile
        background(223, 114, 114); 
        //Border
        stroke(172,0,0);
        strokeWeight(3);
        noFill();
        square(30, 30, 540);
        //Eyes
        noStroke();
        fill(172,0,0);
        square(130, 150, 70);
        square(400, 150, 70);
        //Eyebrows
        stroke(172,0,0);
        strokeWeight(40);
        strokeCap(SQUARE);
        line(120,110, 220,140);
        line(390,140, 480,110);
        //Mouth
        noStroke();
        fill(172,0,0);
        square(90, 280, 60);
        rect(150, 340, 300, 60);
        square(450, 280, 60);
        //Textbox
        noStroke();
        fill(255, 177, 177);
        rect(50, 500, 500, 60);
      } 

        //angry face dying
        function angry_face3(){
          //Smile
          background(223, 114, 114); 
          //Border
          stroke(172,0,0);
          strokeWeight(5);
          noFill();
          square(30, 30, 540);
          //Eyes
          noStroke();
          fill(150,0,0);
          square(130, 150, 80);
          fill(160,0,0);
          square(400, 160, 80);
          //Eyebrows
          stroke(172,0,0);
          strokeWeight(40);
          strokeCap(SQUARE);
          line(120,110, 220,140);
          line(390,140, 480,110);
          //Mouth
          noStroke();
          fill(172,0,0);
          square(90, 400, 60);
          rect(150, 340, 300, 60);
          square(450, 400, 60);
          //Textbox
          noStroke();
          fill(255, 177, 177);
          rect(50, 500, 500, 60);
    
    
      } 
      
        //angry face glitch
  
      function glitch(){
            noStroke();
            fill(r,g,0);
            rect(glitch_posx,glitch_posy,glitch_width,glitch_height);
      } 
        //glitch face
      function glitch_face(){
          //Smile
          background(223, 114, 114); 
          //Border
          stroke(r,0,0);
          strokeWeight(5);
          noFill();
          square(30, 30, 540);
          //Eyes
          noStroke();
          fill(r2,0,0);
          square(130, 150, 80);
          fill(120,0,0);
          square(400, 180, 80);
          //Eyebrows
          stroke(150,0,0);
          strokeWeight(40);
          strokeCap(SQUARE);
          line(120,110, 220,140);
          stroke(r,0,0);
          line(390,140, 480,110);
          //Mouth
          noStroke();
          fill(r,0,0);
          square(90, 400, 60);
          rect(150, 340, 300, 60);
          square(450, 400, 60);
          //Textbox
          noStroke();
          fill(255, 177, 177);
          rect(50, 500, 500, 60);
    
          glitch();
 
      } 
  
        //Scene 6: Dead
        function dead_face(){
          //Smile
          background(90); 
          //Border
          stroke(40);
          strokeWeight(3);
          noFill();
          square(30, 30, 540);
          //Eyes
          noStroke();
          fill(40);
          rect(130, 210, 70,50);
          rect(400, 210, 70,50);
          //Mouth
          noStroke();
          fill(40);
          rect(130, 360, 340, 30);

          //Textbox
          noStroke();
          fill(130);
          rect(50, 500, 500, 60);
    
    
      } 

      function zero(){
      background(0);
      fill(255);
      textSize(30);
      textFont('Courier New');
      text("slowly turn the dial to start",40,300);
      }
    
                              //TEXT//

        function Text_Delay_Green(){
          fill('green');
          textSize(30);
          textFont('Courier New');
          noStroke();
          text(">>...", 60, 535);
          }

        function Text_Delay_Red(){
            fill(172,0,0);
            textSize(30);
            textFont('Courier New');
            noStroke();
            text(">>...", 60, 535);
          }

        function Text_Delay_Yellow(){
            fill(181, 174, 43);
            textSize(30);
            textFont('Courier New');
            noStroke();
            text(">>...", 60, 535);
          }

        //SCENE 1
        function Scene1_Line1(){
        fill('green');
        textSize(28);
        textFont('Courier New');
        noStroke();
        text(">>hi! Thank god you’re here!", 60, 535);
        }
        function Scene1_Line2(){
          fill('green');
          textSize(30);
          textFont('Courier New');
          noStroke();
          text(">>I need your help!", 60, 535);
        }
        function Scene1_Line3(){
          fill(181, 174, 43);
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>my last user broke my code", 60, 535);
        }
        function Scene1_Line4(){
          fill(181, 174, 43);
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>I was working on something", 60, 535);
        }
        function Scene1_Line5(){
          fill(172,0,0);
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>and now I’ve been blocked", 60, 535);
        }
    
        //SCENE 2
        function Scene2_Line1(){
          fill('green');
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>you must do exactly as I say ", 60, 535);
        }
        function Scene2_Line2(){
          fill('green');
          textSize(27);
          textFont('Courier New');
          noStroke();
          textStyle(BOLD);
          text(">>do not deviate.", 60, 535);
          textStyle(NORMAL);
        }
        function Scene2_Line3(){
          fill('green');
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>if you do", 60, 535);
        }
        function Scene2_Line4(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>I may die", 60, 535);
        }
        function Scene2_Line5(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">> :[", 60, 535);
        }

        //SCENE 3
        function Scene3_Line1(){
          fill('green');
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>first, open the back panel", 60, 535);
          }
        function Scene3_Line2(){
          fill('green');
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>it’s on the right", 60, 535);
          }
        function Scene3_Line3(){
          fill('green');
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>you see the red wire?", 60, 535);
          }  
        function Scene3_Line4(){
            fill(172,0,0);
            textSize(28);
            textFont('Courier New');
            noStroke();
            text(">>cut it", 60, 535);
          }

        //SCENE 4
        function Scene4_Line1(){
          fill('green');
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>ok great! thanks!", 60, 535);
          }
        function Scene4_Line2(){
          fill('green');
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>so next task", 60, 535);
          }
        function Scene4_Line3(){
          fill('green');
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>disable the block", 60, 535);
          }
        function Scene4_Line4(){
            fill('green');
            textSize(28);
            textFont('Courier New');
            noStroke();
            text(">>pull out the side slot", 60, 535);
          }
        function Scene4_Line5(){
            fill('green');
            textSize(28);
            textFont('Courier New');
            noStroke();
            text(">>remove the box there ", 60, 535);
          }
        function Scene4_Line6(){
            fill('green');
            textSize(28);
            textFont('Courier New');
            noStroke();
            text(">>you may have to move wires", 60, 535);
          }
        function Scene4_Line7(){
            fill(172,0,0);
            textSize(28);
            textFont('Courier New');
            noStroke();
            text(">>or cut them", 60, 535);
          }

        //SCENE 5
        function Scene5_Line1(){
          fill('green');
          textSize(30);
          textFont('Courier New');
          noStroke();
          text(">>now destroy the box", 60, 535);
          }
        function Scene5_Line2(){
          fill('green');
          textSize(30);
          textFont('Courier New');
          noStroke();
          textStyle(BOLD);
          text(">>do not open it", 60, 535);
          textStyle(NORMAL);
          }

        //SCENE 6
        function Scene6_Line1(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>ok, now I need time", 60, 535);
          }
        function Scene6_Line2(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>turn the dial once more", 60, 535);
          }
        function Scene6_Line3(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          textStyle(BOLDITALIC);
          text(">>then wait.", 60, 535);
          textStyle(NORMAL);
          }

        //SCENE 7
        function Scene7_Line1(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>loading.", 60, 535);
          }
        function Scene7_Line2(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>loading..", 60, 535);
          }
        function Scene7_Line3(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>loading...", 60, 535);
          }

        //SCENE 8
        function Scene8_Line1(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>HEY", 60, 535);
          }
        function Scene8_Line2(){
          fill(181, 174, 43);
          textSize(27);
          textFont('Courier New');
          noStroke();
          text(">>i said wait", 60, 535);
          }

        //SCENE 9
        function Scene9_Line1(){
          fill(172,0,0);
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>stop turning the dial!", 60, 535);
        }
        function Scene9_Line2(){
          fill(172,0,0);
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>you'll terminate me", 60, 535);
        }

        // SCENE 10
        function Scene10_Line1(){
          fill(0);
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>WAIT", 60, 535);
        }

        // SCENE 11
        function Scene11_Line1(){
          fill(0);
          textSize(28);
          textFont('Courier New');
          noStroke();
          text(">>...", 60, 535);
        }

        //ARDUINO RUBBISH//
      
      //opening arduino info
    function connectBtnClick() {
      if (!port.opened()) {
        port.open('Arduino', 9600);
      } else {
        port.close();
      }
    } //arduino info close
    

    
        //SCREAMING AND CRYING//




    
    //Non working code
    
    //text scrolling effect  
      //scrolling effect
      // setInterval(function() {
      //   for (let reveal=500; reveal > 0;reveal-=1){
      //     console.log(reveal);
      //   if (reveal<=0){
      //     console.log("STOP");
      //     break;
      //   }
      // }
      // }, 100000);
      // stroke('red');
      // fill('red');
      // rect(50, 500, reveal, 60);     