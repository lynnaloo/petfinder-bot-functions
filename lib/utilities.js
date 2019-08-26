const greetings = require('./greetings');

class Utilities {

  getGreeting() {
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    return greeting;
  }

  getAdoptionText(name, gender, breed, url, city, state) {
    const adoptionBlurb = `${this.getGreeting()} My name is ${name}. I am a ${gender} ${breed} in ${city}, ${state}. Check out my adoption link for more information! ${url}`;
    console.log('DEBUG:', adoptionBlurb);
    return adoptionBlurb;
  }

}

module.exports = Utilities;
