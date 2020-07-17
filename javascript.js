function feetToMile(feet)
{
    if(feet<0){
        console.log("Invalid feet input");
    }
    else{
            var Mile=feet/5280;
            return Mile;  
        } 
}

function woodCalculator(chair, table, Bedstead)
{
    if(chair<0||table<0||Bedstead<0){
        console.log("Negative input is invalid");
    }
    else{
        var TotalNeededWood=chair*1+table*3+Bedstead*5;
        return TotalNeededWood;
    }
   
}
function brickCalculator(floor) {
    if(floor<0){
        console.log("Invalid Floor Number");
    }
    else{
        var TotalBrick;
    
        if(floor>=1 && floor<=10){
             TotalBrick=floor*15*1000;
        } 
        else if(floor>=11 && floor<=20){
             TotalBrick=10*15*1000+((floor-10)*12*1000);
        }
        else{
            TotalBrick=(10*15*1000)+(10*12*1000)+((floor-20)*10*1000);
        }
        return TotalBrick;
    }
  
}

function tinyFriend(friends)
{
    if(friends=="")
    {
        console.log("You have no friend");
    }
    else{
        var tiny=friends[0].length;
        for(var i=0;i<friends.length;i++){
        var others=friends[i].length;
        if(others<tiny){
            tiny=others;
            var tinyFrnd=friends[i];
            }
        else{
                var tinyFrnd=friends[0];
            }
        }
        return tinyFrnd;
        }
}