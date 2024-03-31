export function getTimeElapsed(timestamp) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerWeek = msPerDay * 7;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const now = new Date().getTime();
    const elapsed = now - timestamp;

    if (elapsed < msPerMinute) {
        return "< 1 min";
    } else if (elapsed < msPerHour) {
        return Math.floor(elapsed / msPerMinute) + " min";
    } else if (elapsed < msPerDay) {
        return Math.floor(elapsed / msPerHour) + " hr";
    } else if (elapsed < msPerWeek) {
        return Math.floor(elapsed / msPerDay) + " d";
    } else if (elapsed < msPerMonth) {
        return Math.floor(elapsed / msPerWeek) + " w";
    } else if (elapsed < msPerYear) {
        return Math.floor(elapsed / msPerMonth) + " mon";
    } else {
        return Math.floor(elapsed / msPerYear) + " year";
    }
}