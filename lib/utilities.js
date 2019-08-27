const greetings = require('./greetings');

class Utilities {

  getGreeting() {
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    return greeting;
  }

  getAdoptionText(name, gender, breed, url, city, state, tags) {
    const hashtags = tags || [];
    // add more values to the hashtag list
    hashtags.push(breed);
    hashtags.push(city);
    hashtags.push(state);

    const hashString = hashtags.map((tag) => {
    // sanitize hashtags and add # symbol
      return tag ? `#${(tag || '').replace(/[^A-Z0-9]/ig, '')}` : '';
    }).join(' ');

    const adoptionBlurb = `${this.getGreeting()} My name is ${name}. I am a ${gender} ${breed} in ${city}, ${state}. Check out my adoption link for more information! ${url} ${hashString}`;
    console.log('DEBUG:', adoptionBlurb);
    return adoptionBlurb;
  }

}

module.exports = Utilities;
