// ==UserScript==
// @name         Plex Web Style Custom
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Custom some style for Plex TV Web Client
// @author       Thea
// @match        http://192.168.1.6:32400/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Function to apply the styles
    // set !important to all custom CSS
    function applyStyle() {
        var style = document.createElement('style');
        style.innerHTML = `
            /* Reduce left side bar size */
            .SourceSidebar-openSidebar-I364_Z {
                width: 160px !important;
                min-width: 160px !important;
            }

            /* Change alphabet jumpbar at left to the top */
            .DirectoryListPageContent-listContainer-gWP4ft{
                flex-direction: column-reverse !important;
            }
            .DirectoryListJumpBar-jumpBar-herK_R{
                flex-flow: row !important;
                padding: 10px 500px !important;
                font-size: 15px !important;
                margin: -45px 0 0 0 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Apply the style when the DOM is fully loaded
    if (document.readyState === 'complete') {
        applyStyle();
    } else {
        window.addEventListener('load', applyStyle);
    }
})();
