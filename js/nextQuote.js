// An array of possible quotes
var quotes = [
    'It\'s not easy when it\'s difficult, but it\'s bloody awful when it\'s hopeless.', 
    'Welcome to a world of darkness \[wsg\]',
	'You are a thief and a murderer too, Stole the face that you wear from a craven baboon',
    'It\'s alright to feel like a fat child in a pushchair, Old enough to run, Old enough to fire a gun, It\'s alright',
    'A flip of whipped cream blasted fast past bratty ass snatched psychic sex',
	'I pretended I was drunk when I came out to my friends, I never came out to my friends',
	'\'Cause I don\'t wanna know, I don\'t wanna know, I don\'t wanna know, I don\'t wanna know',
	'En cactus reste sig och sa! Cactus galaxus det e jag!',
	'Pick me up, Dust me off Give me breath, And let me cough',
	'Genom hålet i mitt hjärta Kommer räddningen till slut Genom hålet i mitt hjärta',
	'Jag stal något du var beredd att ge mig Du förlät mig, jag kunde inte se dig I ögonen, förlåt älskling Jag gör det snart igen',
	'Några av oss hittar dit en gång men förstår inte vad vi ser, Några av oss hittar dit en gång sen aldrig aldrig mer',
	'By the time I got to New York, I was living like a king ,Then, I used up all my money, I was looking for your ass',]
var currentQuote = 0;

function nextQuote(showImmediately) {
    // We can use a promise to make sure that we don't switch the
    // quote out until the text is hidden
    var hidden = $.Deferred();
    
    if (!showImmediately)
        $('#quotes').fadeOut('slow', function() { hidden.resolve(); });
    else
        hidden.resolve();
    
    // Once the promise is resolved, go ahead and modify the DOM
    hidden.promise().done(function() {
        
        // Get a quote that's not the current one
        // (we may need to try a few times if it's a small array
        var randomIndex = currentQuote;
        while (randomIndex == currentQuote) {
            randomIndex = (Math.floor(Math.random() * quotes.length));
        }

        // Now switch it out and fade back in        
        $('#quotes').html(quotes[randomIndex]);
        $('#quotes').fadeIn('slow');
        currentQuote = randomIndex;
    });
}

nextQuote(true);
setInterval(function() { nextQuote(false); }, 10000);