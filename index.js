function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation < 42) {
        return (42 - pickUpLocation);
    }
    else {
        return (pickUpLocation - 42);
    }
}

function distanceFromHqInFeet(pickUpLocation) {
    if (pickUpLocation < 42) {
        return ((42 - pickUpLocation) * 264);
    }
    else {
        return ((pickUpLocation - 42) * 264);
    }
}

function distanceTravelledInFeet(startingBlock, endingBlock){
    if (startingBlock > endingBlock){
        return ((startingBlock - endingBlock) * 264)
    }else {
        return((endingBlock - startingBlock) * 264)
    }

}

function calculatesFarePrice (start, destination){
    let distance = Math.abs (start - destination) * 264
    let feet = 0;
    if(distance<= 400){
        return feet;
    }else if(distance > 400 && distance<= 2000){
        return feet = (distance - 400) *0.02;
    }else if(distance > 2000 &&distance<=2500 ) {
        return feet = 25;
    }else {
        return feet = "cannot travel that far";
    }
    







}