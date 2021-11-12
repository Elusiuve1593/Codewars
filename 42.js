function setAlarm(employed, vacation) {
    if (employed == vacation) {
        return false
    } else if (employed == false && vacation == true) {
        return false
    } else if (employed == false && vacation == false) {
        return false
    } else if (employed == true && vacation == false) {
        return true
    }
}