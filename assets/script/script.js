'use strict';

// HTML elements
const userOSElement = document.querySelector('.user-data-container span:first-child');
const userLanguageElement = document.querySelector('.user-data-container span:nth-child(2)');
const userBrowserElement = document.querySelector('.user-data-container span:nth-child(3)');

const userWidthElement = document.querySelector('.box:nth-child(2) .user-data-container span:first-child');
const userHeightElement = document.querySelector('.box:nth-child(2) .user-data-container span:nth-child(2)');
const userOrientationElement = document.querySelector('.box:nth-child(2) .user-data-container span:nth-child(3)');
const userBatteryLevelElement = document.querySelector('.box:nth-child(3) .user-data-container span:first-child');
const userBatteryStatusElement = document.querySelector('.box:nth-child(3) .user-data-container span:nth-child(2)');

const userNetworkStatusElement = document.querySelector('.network-status');

let userAgent = navigator.userAgent;

let userOrientation = '';
let userViewportWidth = window.innerWidth;
let userViewportHeight = window.innerHeight;

function userOSDetector() {
    let userPlatform = "Unknown OS";

    if (userAgent.indexOf("Win") != -1) userPlatform = "Windows";
    if (userAgent.indexOf("Mac") != -1) userPlatform = "Macintosh";
    if (userAgent.indexOf("Linux") != -1) userPlatform = "Linux";
    if (userAgent.indexOf("Android") != -1) userPlatform = "Android";
    if (userAgent.indexOf("like Mac") != -1) userPlatform = "iOS";

    return userPlatform
}

function userLanguageDetector() {
    let userLanguage = navigator.language || navigator.userLanguage;

    return userLanguage;
}

function userBrowserDetector() {
    let userBrowser = "Unknown Browser";

    if (userAgent.indexOf("Chrome") > -1) {
        userBrowser = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        userBrowser = "Apple Safari";
    } else if (userAgent.indexOf("Opera") > -1) {
        userBrowser = "Opera";
    } else if (userAgent.indexOf("Firefox") > -1) {
        userBrowser = "Mozilla Firefox";
    } else if (userAgent.indexOf("Edg") > -1) {
        userBrowser = "Microsoft Edge";
    }

    return userBrowser;
}

function userWidthDetector() {
    return `${userViewportWidth}px`
}

function userHeightDetector() {
    return `${userViewportHeight}px`
}

function userOrientationDetector() {
    if (window.innerWidth > window.innerHeight) {
        userOrientation = 'landscape';
    } else {
        userOrientation = 'portrait';
    }

    return userOrientation;
}

async function batteryLevelDetector() {
    if (navigator.getBattery) {
        try {
            const battery = await navigator.getBattery();
            return `${battery.level * 100}%`;
        } catch (error) {
            return 'not available';
        }
    } else {
        return 'not available';
    }
}

async function batteryStatusDetector() {
    if (navigator.getBattery) {
        try {
            const battery = await navigator.getBattery();
            if (battery.charging) {
                return 'charging';
            } else {
                return 'idle';
            }
        } catch (error) {
            return 'not available';
        }
    } else {
        return 'not available';
    }
}

function networkStatusDetector() {
    if (navigator.onLine) {
        return 'ONLINE';
    } else {
        return 'OFFLINE';
    }
}


window.addEventListener('load', function () {
    userOSElement.textContent += userOSDetector();
    userLanguageElement.textContent += userLanguageDetector();
    userBrowserElement.textContent += userBrowserDetector();

    userWidthElement.textContent += userWidthDetector();
    userHeightElement.textContent += userHeightDetector();
    userOrientationElement.textContent += userOrientationDetector();

    batteryLevelDetector().then(function (result) {
        userBatteryLevelElement.textContent += result;
    });
    batteryStatusDetector().then(function (result) {
        userBatteryStatusElement.textContent += result;
    });
});

window.addEventListener('resize', function () {
    userViewportWidth = window.innerWidth;
    userViewportHeight = window.innerHeight;
    userOrientation = userOrientationDetector();

    userWidthElement.textContent = `Width: ${userWidthDetector()}`;
    userHeightElement.textContent = `Height: ${userHeightDetector()}`;

    userOrientationElement.textContent = `Orientation: ${userOrientation}`;
});

window.addEventListener('offline', function () {
    userNetworkStatusElement.textContent = networkStatusDetector();
    userNetworkStatusElement.style.backgroundColor = 'rgb(235, 0, 0)';
});

window.addEventListener('online', function () {
    userNetworkStatusElement.textContent = networkStatusDetector();
    userNetworkStatusElement.style.backgroundColor = 'var(--button-green)';
});

navigator.getBattery().then(function (battery) {
    battery.addEventListener('chargingchange', function () {
        if (battery.charging) {
            userBatteryStatusElement.textContent = 'Status: charging';
        } else {
            userBatteryStatusElement.textContent = 'Status: idle';
        }
    });
});
