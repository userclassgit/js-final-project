'use strict';
// test on multiple browsers

// HTML elements
const userOSElement = document.querySelector('.user-data-container span:first-child');
const userLanguageElement = document.querySelector('.user-data-container span:nth-child(2)');
const userBrowserElement = document.querySelector('.user-data-container span:nth-child(3)');

const userWidthElement = document.querySelector('.box:nth-child(2) .user-data-container span:first-child');


let userAgent = navigator.userAgent;
let userPlatform = "Unknown OS";
let userLanguage = navigator.language || navigator.userLanguage;
let userBrowser = "Unknown Browser";
let userViewportWidth = window.innerWidth;

// detecting user OS
if (userAgent.indexOf("Win") != -1) userPlatform = "Windows";
if (userAgent.indexOf("Mac") != -1) userPlatform = "Macintosh";
if (userAgent.indexOf("Linux") != -1) userPlatform = "Linux";
if (userAgent.indexOf("Android") != -1) userPlatform = "Android";
if (userAgent.indexOf("like Mac") != -1) userPlatform = "iOS";

// detecting user browser
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

window.addEventListener('load', function() {
    userOSElement.textContent += userPlatform;
    userLanguageElement.textContent += userLanguage;
    userBrowserElement.textContent += userBrowser;

    userWidthElement.textContent += `${userViewportWidth}px`;

});

window.addEventListener('resize', function() {
    userViewportWidth = window.innerWidth;
    userWidthElement.textContent = `Width: ${userViewportWidth}px`;
});

