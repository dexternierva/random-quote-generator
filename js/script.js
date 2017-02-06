// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

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

// Select a random quote object from the quotes Array
function getRandomQuote() {
	var quotesLength = quotes.length;
	var quoteIndex = Math.floor( Math.random() * quotesLength );

	return quotes[quoteIndex];
}

// Function that builds and displays the string
function printQuote () {
	var randomQuote = getRandomQuote();

	// Construct string
	var HTML = '<p class="quote">' + randomQuote.quote + '</p>';
		HTML += '<p class="source">' + randomQuote.source;

		// Check if "citation" exists
		if ( randomQuote.citation ) {
			HTML += '<span class="citation">' + randomQuote.citation + '</span>';
		}

		// Check if "year" exists
		if ( randomQuote.year ) {
			HTML += '<span class="year">' + randomQuote.year + '</span>';
		}

		HTML += '</p>';

	// Display final HTML string
	document.getElementById( 'quote-box' ).innerHTML = HTML;

	// Change Background Color
	changeBackground();
}

// Function to Generate a Random Color
function changeBackground() {
	var randomNumber = function () { return Math.floor( Math.random() * 256 ) };
	var hue = 'rgb(' + randomNumber() + ', ' + randomNumber() + ', ' + randomNumber() + ')';
	document.body.style.backgroundColor = hue;
}
