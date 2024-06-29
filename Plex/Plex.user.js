// ==UserScript==
// @name         Plex Web Style Custom
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Custom some style for Plex TV Web Client
// @author       Thea
// @match        http://192.168.1.6:32400/*
// @match        https://app.plex.tv/desktop/*
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
                width: 40% !important;
            }
            .edit-metadata-modal .modal-body {
                max-height: 70% !important;
            }
            .edit-metadata-modal .modal-body-pane {
                height: 70% !important;
            }
            .edit-metadata-modal .selectize-dropdown-content {
                max-height: 338px !important;
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
