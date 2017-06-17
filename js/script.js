// Array of objects to hold quotes.
var quotes = [
	{
		quote: 'The Way Get Started Is To Quit Talking And Begin Doing.',
		source: 'Walt Disney'
	},
	{
		quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.',
		source: 'Winston Churchill'
	},
	{
		quote: 'Don’t Let Yesterday Take Up Too Much Of Today.',
		source: 'Will Rogers'
	},
	{
		quote: 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
		source: 'Unknown'
	},
	{
		quote: 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
		source: 'Vince Lombardi'
	},
	{
		quote: 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
		source: 'Steve Jobs'
	},
	{
		quote: 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
		source: 'Rob Siltanen'
	},
	{
		quote: 'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
		source: 'Og Mandino'
	},
	{
		quote: 'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.',
		source: 'Mohnish Pabrai'
	},
	{
		quote: 'We May Encounter Many Defeats But We Must Not Be Defeated.',
		source: 'Maya Angelou'
	},
	{
		quote: 'Life is not fair, get used to it',
		source: 'Bill Gates',
		citation: 'Inspiring Bill Gates Quotes',
		year: 2014
	}
];

// Map through quotes to get an array containing index of each quote
function map(arr, fn) {
	let idx = -1,
		len = arr.length,
		result = new Array(len);
	while (++idx < len) { result[idx] = fn(arr[idx], idx, arr); }
	return result;
}

var quoteIdx = map(quotes, (item, idx) => idx);

// Generate a random number between 0 and length of the quotes array
var random = function (arr) {
	var idx = Math.floor( Math.random() * arr.length );
	return idx;
}

// Get random index
var getIdx = function (quoteIdx, quotes) {
	if (quoteIdx.length === 0) {
		quoteIdx = map(quotes, (item, idx) => idx);
	}
	var randomNum = random(quoteIdx);
	var idx = quoteIdx.splice(randomNum, 1)[0];
	return idx;
}

// Construct Element
function constructEl (randomQuote) {
	var html = '<p class="quote">' + randomQuote.quote + '</p>';
		html += '<p class="source">' + randomQuote.source;

		// Check if "citation" exists
		if ( randomQuote.citation ) {
			html += '<span class="citation">' + randomQuote.citation + '</span>';
		}

		// Check if "year" exists
		if ( randomQuote.year ) {
			html += '<span class="year">' + randomQuote.year + '</span>';
		}

		html += '</p>';

	return html;
}

// Function to Generate a Random Color
function changeBackground() {
	var randomNumber = function () { return Math.floor( Math.random() * 256 ) };
	var hue = 'rgb(' + randomNumber() + ', ' + randomNumber() + ', ' + randomNumber() + ')';
	document.body.style.backgroundColor = hue;
}

// Run when "show another quote" button is clicked
function init() {
	var idx = getIdx(quoteIdx, quotes);
	var el = document.querySelector('#quote-box');

	el.innerHTML = constructEl(quotes[idx]);
	// Change Background Color
	changeBackground();
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", init, false);
