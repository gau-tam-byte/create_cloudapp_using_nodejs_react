module.exports.getDate = function getDate() {
    var aestTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Calcutta"});
    return new Date(aestTime);
}
