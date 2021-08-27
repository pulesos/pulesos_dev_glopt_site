import modal from "./modules/modal";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    slider('.reviews__slider__content', '.reviews__arrow_left', '.reviews__arrow_right');
    modal();

});