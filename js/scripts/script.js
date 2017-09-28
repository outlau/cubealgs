/*global $ olls plls*/
var movement = false;

$(document).ready(function() {
     createOllGrid();
     createPllGrid();
    
    $('#opensidenav').click(function(){
        openNav();
    });
    
    $("#test").text(detectmob());
    
    $(window).load(function() {
        sidenavsectionsaddeventlistener(document.getElementById('ollmenuitem'), document.getElementById('sectionoll') );
        sidenavsectionsaddeventlistener(document.getElementById('pllmenuitem'), document.getElementById('sectionpll'));
        sidenavsectionsaddeventlistener(document.getElementById('notationmenuitem'), document.getElementById('notation-div'));
    });
    
});

function createOllGrid(){
    var rows = 5;
    var cols = 5;
    var sectioncount = 0;
    var sectionheader = document.createElement("row");
    sectionheader.innerHTML = "<h1 class='section sectionheader' id='sectionoll'>OLL</h1>";
    document.getElementById("cont").appendChild(sectionheader);
    for(var section in olls){
        var count = 0;
        var sectionLength = objLength(olls[section]);
        for(var alg in olls[section]){
            if(count != 0){
                var containerdiv;
                var namecontainerdiv;
        
                if(count%2==1 && count){
                    containerdiv = document.createElement('div');
                    containerdiv.className = "row contentrows";
                    namecontainerdiv = document.createElement('div');
                    namecontainerdiv.className = "row namerows";
                }
                
                var imgcontainer = document.createElement('div');
                imgcontainer.className = "col-xs-6 col-lg-3 col-lg-offset-3";
                
                var namecontainer = document.createElement('div');
                namecontainer.className = "col-xs-6 col-lg-3 col-lg-offset-3";
                
                var name = document.createElement("div");
                if(olls[section][alg].name != null)
                    name.innerHTML += "<div>"+olls[section][alg].name+"</div>";
                    
                var splitalg = olls[section][alg].algorithm.split("\n");
                var sectionalg = "";
                for(var i = 0; i<splitalg.length; i++){
                    sectionalg += splitalg[i] + "<br>";
                }
                    
                name.innerHTML += "<p class='algo'>"+sectionalg+"</p>";
                namecontainer.appendChild(name);
                
                var squares = olls[section][alg].squares;
                var grid = document.createElement('table');
                grid.className = 'grid';
                for (var r = 0; r < rows; r++) {
                    var tr = grid.appendChild(document.createElement('tr'));
                    for (var c = 0; c < cols; c++) {
                        var container = tr.appendChild(document.createElement('td'));
                        if(r == 0 || r == rows - 1 || c == 0 || c == cols - 1){
                            if(squares[r][c] == 1){   
                                container.className = "outersquare filledoutersquare";
                            }
                            else{
                                container.className = "outersquare emptyoutersquare";
                            }
                        }
                        else{
                            if(squares[r][c] == 1){
                                container.className = "innersquare filledcell";
                            }
                            else{
                                container.className = "innersquare emptycell";
                            }
                        }
                    }
                }
                containerdiv.appendChild(imgcontainer);
                imgcontainer.appendChild(grid);
                namecontainerdiv.appendChild(namecontainer);
                
                document.getElementById("cont").appendChild(containerdiv);
                document.getElementById("cont").appendChild(namecontainerdiv);
                
                if(count >= sectionLength-1){
                    var borderdiv = document.createElement('div');
                    borderdiv.className = "borderrow";
                    document.getElementById("cont").appendChild(borderdiv);
                    namecontainerdiv.className = "row";
                }
            }
            else{
                var sectionname = olls[section][alg];
                
                var header = document.createElement("row");
                
                header.innerHTML = "<h1 class='section' id='sectionoll"+sectioncount+"'>"+sectionname+"</h1>";
                document.getElementById("cont").appendChild(header);
                
                var sidenavitem = document.createElement("li");
                
                sidenavitem.innerHTML = "<a>"+sectionname+"</a>";
                
                sidenavitem.addEventListener("touchstart", function(){
                    movement = false;
                }, false);
                sidenavitem.addEventListener("touchmove", function(){
                    movement = true;
                }, false);
                
                sidenavitem.addEventListener("touchend", initaliseEvent(document.getElementById("sectionoll"+sectioncount)), false);
                
                sidenavitem.addEventListener("click", initaliseEvent(document.getElementById("sectionoll"+sectioncount)), false);
                document.getElementById("oll-list").appendChild(sidenavitem);
            }
            count++;
        }
        sectioncount++;
    }
}

function createPllGrid(){
    var rows = 3;
    var cols = 3;
    var sectioncount = 0;
    
    var sectionheader = document.createElement("row");
    sectionheader.innerHTML = "<h1 class='section sectionheader' id='sectionpll'>PLL</h1>";
    document.getElementById("cont").appendChild(sectionheader);
    
    for(var section in plls){
        var count = 0;
        
        var sectionLength = objLength(plls[section]);
        for(var alg in plls[section]){
            if(count != 0){
                var containerdiv = document.createElement('div');
                containerdiv.className = "row contentrows";
                
                var imgcontainer = document.createElement('div');
                imgcontainer.className = "col-xs-5  ";
                
                var namecontainer = document.createElement('div');
                namecontainer.className = "col-xs-5 ";
                
                var name = document.createElement("div");
                if(plls[section][alg].name != null)
                    name.innerHTML += "<div>"+plls[section][alg].name+"</div>";
                
                var sectionalg = "";
                var splitalg = plls[section][alg].algorithm.split("\n");
                if(detectmob()){
                    for(var i = 0; i<splitalg.length; i++){
                        sectionalg += splitalg[i] + "<br>";
                    }
                }
                else{
                    for(var i = 0; i<splitalg.length; i++){
                        sectionalg += splitalg[i];
                    }
                }
                
                name.innerHTML += "<p class='algo'>"+sectionalg+"</p>";
                namecontainer.appendChild(name);
                
                var connections = plls[section][alg].connections;
                var squares = [];
                var grid = document.createElement('table');
                grid.className = 'grid';
                for (var r = 0; r < rows; r++) {
                    var tr = grid.appendChild(document.createElement('tr'));
                    for (var c = 0; c < cols; c++) {
                        var container = tr.appendChild(document.createElement('td'));
                        container.className = "innersquare filledcell";
                        squares.push(container);
                    }
                }
                containerdiv.appendChild(imgcontainer);
                imgcontainer.appendChild(grid);
                containerdiv.appendChild(namecontainer);
                document.getElementById("cont").appendChild(containerdiv);
                
                if(count >= sectionLength-1){
                    var borderdiv = document.createElement('div');
                    borderdiv.className = "borderrow";
                    document.getElementById("cont").appendChild(borderdiv);
                }
                
                for(var j = 0; j < connections.length; j++){
                    var line = document.createElement("div");
                    line.className = "line";
                    
            
                    imgcontainer.appendChild(line);
                    
                    var start = connections[j][0]-1;
                    var end = connections[j][1]-1;
                    
                    adjustLine(squares[start], squares[end], line );
                    
                }
            }
            else{
                var sectionname = plls[section][alg];
                var header = document.createElement("row");
                header.innerHTML = "<h1 class='section' id='sectionpll"+sectioncount+"'>"+sectionname+"</h1>";
                document.getElementById("cont").appendChild(header);
                
                var sidenavitem = document.createElement("li");
                sidenavitem.innerHTML = "<a onclick='scroll(sectionpll"+sectioncount+")'>"+sectionname+"</a>";
                
                sidenavitem.innerHTML = "<a>"+sectionname+"</a>";
                sidenavitem.addEventListener("touchstart", function(){
                    movement = false;
                }, false);
                sidenavitem.addEventListener("touchmove", function(){
                    movement = true;
                }, false);
                
                sidenavitem.addEventListener("touchend", initaliseEvent(document.getElementById("sectionpll"+sectioncount)) , false);
                
                
                document.getElementById("pll-list").appendChild(sidenavitem);
            }
            count++;
        }
        sectioncount++;
    }
}

function objLength(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

function scroll(i){
    
    
    if(!movement){
        i.scrollIntoView();
        closeNav();
    }
}

function openNav() {
    var bluramt = "1px";
    var popoutamt = "200px";
    
    //$(document.body).css("overflow","hidden");
    //$("$cont").css("overflow","hidden");
    //$('#cont').css("filter","blur("+bluramt+")");
    
    $('#sidenav').transition({ 
        x: popoutamt,
        duration: 500 });
    
    //$('#opensidenav').css("filter","blur("+bluramt+")");
    $('#opensidenav').transition({ 
        x: popoutamt,
        duration: 500 });
    
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    
    var popoutamt = "-200px";
    
    //$(document.body).css("overflow-y","visible");
    
    //$('#cont').css("filter","blur(0px)");
    
    $('#sidenav').transition({ 
        x: popoutamt,
        duration: 500 });
    
    $('#opensidenav').transition({ 
        x: '0px',
        duration: 500 });
    //$('#opensidenav').css("filter","blur(0px)");
    
    document.body.style.backgroundColor = "white";
}

function initaliseEvent(i){
    return function(){
        
    console.log(i);
        scroll(i);
    };
}

function adjustLine(from, to, line){
    
    var fT = from.offsetTop  + from.offsetHeight/2;
    var tT = to.offsetTop 	 + to.offsetHeight/2;
    var fL = from.offsetLeft + from.offsetWidth/2;
    var tL = to.offsetLeft 	 + to.offsetWidth/2;
    if(fT>tT){
        
        var fT = from.offsetTop  + from.offsetHeight/3;
    }
    else if(fT<tT){
        
        var fT = from.offsetTop  + from.offsetHeight/1.5;
    }
    if(fL>tL){
        
        var fL = from.offsetLeft  + from.offsetWidth/3;
    }
    else if(fL<tL){
        
        var fL = from.offsetLeft  + from.offsetWidth/1.5;
    }

    var CA   = Math.abs(tT - fT);
    var CO   = Math.abs(tL - fL);
    var H    = Math.sqrt(CA*CA + CO*CO);
    var ANG  = 180 / Math.PI * Math.acos( CA/H );

    if(tT > fT){
        var top  = (tT-fT)/2 + fT;
    }else{
        var top  = (fT-tT)/2 + tT;
    }
    if(tL > fL){
        var left = (tL-fL)/2 + fL;
    }else{
        var left = (fL-tL)/2 + tL;
    }
    
    if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
        ANG *= -1;
    }
        top-= H/2;
    
    if(tT < fT )
        ANG += 180;
    if(tT == fT && fL < tL)
        ANG += 180;
    

    line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-transform"] = 'rotate('+ ANG +'deg)';
    line.style.top    = top+'px';
    line.style.left   = left+'px';
    line.style.height = H + 'px';
}

function sidenavsectionsaddeventlistener(div, section){
    div.addEventListener("touchstart", function(){
        movement = false;
    }, false);
    div.addEventListener("touchmove", function(){
        movement = true;
    }, false);
    div.addEventListener("touchend", initaliseEvent(section), false);
    
    
    
    
}

function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}
