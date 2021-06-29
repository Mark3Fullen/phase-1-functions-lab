// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if (distance <= 42)  {
        return (42 - distance)
    } else if (distance > 42) {
        return (distance - 42)
    }
}

function distanceFromHqInFeet(distance) {
    if (distance <= 42)  {
        return ((42 - distance)*264)
    } else if (distance > 42) {
        return ((distance - 42)*264)
    }
}

function distanceTravelledInFeet(distance, destination) {
    if (distance >= destination) {
        return ((distance - destination)*264)
    } else if(destination > distance) {
        return ((destination - distance)*264)
    }
}

function calculatesFarePrice(start, destination) {
    let equation

    if (start >= destination) {
        equation = ((start - destination)*264)
    } else if(destination > start) {
        equation = ((destination - start)*264)
    }

    let charge

    if (equation <= 400) {
        charge = 0
    } else if (equation > 400 && equation <= 2000) {
        charge = ((equation-400)*.02)
    } else if (equation > 2000 && equation <= 2500) {
        charge = 25
    } else if (equation > 2500) {
        return "cannot travel that far"
    }

    return charge
}