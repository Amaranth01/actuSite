import '/assets/js/darkTheme.js';
import {SwitchTheme} from "./darkTheme";
import('../styles/styles.css');

import'./api';
import {News} from "./api";

let darkTheme = new SwitchTheme();
darkTheme.themeSwitch();

let news = new News();
news.initJson();
