import firstResult from './templates/index.hbs';
import secondResult from './templates/alternative.hbs';
var _ = require('lodash');
var debounce = require('lodash.debounce');
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import resApi from './fetch.js';

import './styles.css';

const search = document.querySelector('#search_input');
const baseUrl = 'https://restcountries.eu/rest/v2/name/';
const resultList = document.querySelector('.result_list');

search.addEventListener(
	'input',
	debounce((event) => {
		resApi(event.target.value, renderContent);
	}),
	500
);

function renderContent(d) {
	if (d.length === 1) {
		const murcup = d.map((item) => firstResult(item)).join('');
		resultList.innerHTML = murcup;
	} else if (d.length < 10) {
		const secondMurcup = d.map((item) => secondResult(item)).join('');
		resultList.innerHTML = secondMurcup;
	} else if (d.length === 0 || d.length > 10) {
		resultList.innerHTML = '';
		alert('Too many matches found. Please enter a more specific query!');
	}
}
