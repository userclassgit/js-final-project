'use strict';
// test on multiple browsers

// HTML elements
const userOSElement = document.querySelector('.user-data-container span:first-child');
const userLanguageElement = document.querySelector('.user-data-container span:nth-child(2)');
const userBrowserElement = document.querySelector('.user-data-container span:nth-child(3)');

const userWidthElement = document.querySelector('.box:nth-child(2) .user-data-container span:first-child');
const userHeightElement = document.querySelector('.box:nth-child(2) .user-data-container span:nth-child(2)');

let userAgent = navigator.userAgent;



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

window.addEventListener('load', function() {
    userOSElement.textContent += userOSDetector();
    userLanguageElement.textContent += userLanguageDetector();
    userBrowserElement.textContent += userBrowserDetector();

    userWidthElement.textContent += userWidthDetector();
    userHeightElement.textContent += userHeightDetector();

});

window.addEventListener('resize', function() {
    userViewportWidth = window.innerWidth;
    userViewportHeight = window.innerHeight;

    userWidthElement.textContent = `Width: ${userWidthDetector()}`;
    userHeightElement.textContent = `Height: ${userHeightDetector()}`;
});

