const BASE = 'https://restcountries.eu/rest/v2/name/';

export default function resApi(search, callback) {
	fetch(BASE + search).then((j) => j.json()).then((d) => callback(d));
}
