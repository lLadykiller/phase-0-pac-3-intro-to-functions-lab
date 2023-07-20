function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(notstring) {
    if (notstring === notstring.toLowerCase()) {
   return "I can't hear you!"
    }
    if (notstring === notstring.toUpperCase()) {
        return "YES INDEED!"
    }
    if (notstring === "Let's have dinner together!") {
        return "I would love to!"
    }
}
