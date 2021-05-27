var canvas = new fabric.Canvas('canvas1');

playerimages = ["tech.png", "Dream_Skin2.png", "Mc_tommyinnit.png"];

randomNumber = Math.floor(Math.random() * 4);

console.log(randomNumber);

playerx = 10;

playery = 10;

blockimagewidth = 30;

blockimageheight = 30;

var playerobject = "";

var blockimageobject = "";

playerimage314 = playerimages[randomNumber];

function player_update() {
    fabric.Image.fromURL(playerimage314, function(Img) {
        playerobject = Img;

        playerobject.scaleToWidth(150);

        playerobject.scaleToHeight(140);

        playerobject.set({
            top:playery,
            left:playerx
        });

        canvas.add(playerobject);
    });
}

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockimageobject = Img;

        blockimageobject.scaleToWidth(blockimagewidth);

        blockimageobject.scaleToWidth(blockimageheight);

        blockimageobject.set ({
           top:playery,
           left:playerx 
        });

        canvas.add(blockimageobject);
    });
}

window.addEventListener("keydown", keyDown);


function keyDown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == "80") {
        console.log("Shift and P key were pressed together");

        blockimagewidth = blockimagewidth + 10;
        blockimageheight = blockimageheight + 10;

        document.getElementById("current_width").innerHTML = blockimagewidth;
        document.getElementById("current_height").innerHTML = blockimageheight;
    }

    if(e.shiftKey == true && keypressed == "77") {
        console.log("Shift and M key were pressed together");

        blockimagewidth = blockimagewidth - 10;
        blockimageheight = blockimageheight - 10;

        document.getElementById("current_width").innerHTML = blockimagewidth;
        document.getElementById("current_height").innerHTML = blockimageheight;
    }

    if(keypressed == "38") {
        up();
        console.log("38, Up");
    }
    if(keypressed == "40") {
        down();
        console.log("40, Down");
    }
    if(keypressed == "37") {
        left();
        console.log("37, Left");
    }
    if(keypressed == "39") {
        right();
        console.log("39, Right");
    }
    if(keypressed == "87") {
        newImage("wall.jpg");
        console.log("W");
    }
    if(keypressed == "89") {
        newImage("yellow_wall.png");
        console.log("Y");
    }
    if(keypressed == "85") {
        newImage("unique.png");
        console.log("U");
    }
    if(keypressed == "84") {
        newImage("trunk.jpg");
        console.log("T");
    }
    if(keypressed == "82") {
        newImage("roof.jpg");
        console.log("R");
    }
    if(keypressed == "76") {
        newImage("light_green.png");
        console.log("L");
    }
    if(keypressed == "71") {
        newImage("ground.png");
        console.log("G");
    }
    if(keypressed == "68") {
        newImage("dark_green.png");
        console.log("D");
    }
    if(keypressed == "67") {
        newImage("cloud.jpg");
        console.log("C");
    }
}