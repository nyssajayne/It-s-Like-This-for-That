import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const likethis = [
	"Uber",
	"AirBnB",
	"Ravelry",
	"Facebook",
	"Twitter",
	"Instagram",
	"Snapchat",
	"Spotify",
	"Yellow Pages",
	"MySpace",
	"Etsy",
	"Craig&rsquo;s List",
	"Gumtree",
	"Costco",
	"7-Eleven",
	"Amazon",
	"Wikipedia",
	"a garage sale",
	"the tooth fairy",
	"Santa&rsquo;s sack",
	"Google Maps",
	"Kickstarter",
	"a TV renovations show",
	"Netscape Navigator",
	"Tindr",
	"BuzzFeed",
	"The New York Times",
	"Netflix",
	"The App Store",
	"Apple Pay",
	"Foursquare",
	"American Idol",
	"Top Model",
	"Die Hard"
]

const likethat = [
	"memorabillia",
	"poodles",
	"dance routines",
	"cheese toasties",
	"chicken salt",
	"flip phones",
	"out of date prunes",
	"unopened Christmas cards",
	"recycled toner cartridges",
	"elephant poo",
	"Mario Kart",
	"replacement kidneys",
	"soviet era military surplus",
	"buying elections",
	"rats",
	"out of date medicine",
	"MiniDisc players",
	"public nudity",
	"false teeth",
	"chewing with your mouth shut",
	"rusty bottle caps",
	"bad Picasso forgeries",
	"beards",
	"bears",
	"unaffordable housing",
	"goats cheese",
	"trapped wind",
	"listicles",
	"unlicensed heart surgeons",
	"off-brand baked beans",
	"poetry that&rsquo;s meant to rhyme but really doesn&rsquo;t",
	"ways to enjoy raw onions",
	"drug smugglers",
	"painfully hot curry",
	"American foreign policy",
	"art made out of cheese",
]

ReactDOM.render(
  <React.StrictMode>
    <App
    	likethis={likethis}
    	likethat={likethat} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
