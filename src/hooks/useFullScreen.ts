// @ts-ignore
function getBrowserFullscreenElementProp() {
    if (typeof document.fullscreenElement !== "undefined") {
        return "fullscreenElement";
        // @ts-ignore
    } else if (typeof document.mozFullScreenElement !== "undefined") {
        return "mozFullScreenElement";
        // @ts-ignore
    } else if (typeof document.msFullscreenElement !== "undefined") {
        return "msFullscreenElement";
        // @ts-ignore
    } else if (typeof document.webkitFullscreenElement !== "undefined") {
        return "webkitFullscreenElement";
    } else {
        throw new Error("fullscreenElement is not supported by this browser");
    }
}
