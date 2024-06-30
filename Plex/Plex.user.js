// ==UserScript==
// @name         Plex Web Style Custom
// @namespace    http://tampermonkey.net/
// @version      30/06/2024
// @description  Custom some style for Plex TV Web Client
// @author       VinhPham26

// @match        http://192.168.1.6:32400/*
// @match        https://app.plex.tv/desktop/*

// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=plex.tv
// @downloadURL  https://github.com/VinhPham26/StyleScripts/raw/main/Plex/Plex.user.js
// @updateURL    https://github.com/VinhPham26/StyleScripts/raw/main/Plex/Plex.user.js
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
                width: 7.5% !important;
                min-width: 7.5% !important;
            }
            .SourceSidebar-pane-mmshLu {
                width: 100% !important;
            }

            /* Change alphabet jumpbar at left to the top */
            .DirectoryListPageContent-listContainer-gWP4ft{
                flex-direction: column-reverse !important;
            }
            .DirectoryListJumpBar-jumpBar-herK_R{
                flex-flow: row !important;
                padding: 20px 20% !important;
                font-size: 18px !important;
                margin: -60px 0 0 0 !important;
            }

            /* Change edit metadata modal bigger */
            .edit-metadata-modal .modal-dialog {
                width: 37% !important;
            }
            .edit-metadata-modal .modal-body {
                min-height: 700px !important;
            }
            .edit-metadata-modal .modal-body-pane {
                height: 700px !important;
            }
            .edit-metadata-modal .selectize-dropdown-content {
                max-height: 300px !important;
            }
        `;
        document.head.appendChild(style);
    }

    function checkIsAlbum(){
        return document.getElementsByClassName('SelectedMenuItem-menuLabel-nQZtur')[1].innerText === 'Albums';
    }

    // Apply the style when the DOM is fully loaded
    if (document.readyState === 'complete') {
        applyStyle();
        if(checkIsAlbum()){
            alert('test')
        }
    } else {
        window.addEventListener('load', applyStyle);
    }
})();
