module.exports = function(context, data) {
  const Util = require('../lib/utilities');

  if (data && data.body) {
    const animals = data.body.animals || [];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const util = new Util();

    console.log('debug:', randomAnimal);

    const animalFacts = {
      animalUrl: randomAnimal.url,
      animalType: randomAnimal.type,
      animalAge: randomAnimal.age,
      animalBreed: randomAnimal.breeds ? randomAnimal.breeds.primary : '',
      animalPhoto: randomAnimal.photos[0].small,
      animalGender: randomAnimal.gender,
      animalName: randomAnimal.name,
      animalCity: randomAnimal.contact.address.city,
      animalState: randomAnimal.contact.address.state
    };

    const adoptionBlurb = `${util.getAdoptionText(animalFacts.animalName, animalFacts.animalGender, animalFacts.animalBreed, animalFacts.animalUrl, animalFacts.animalCity, animalFacts.animalState)}`;
    console.log('DEBUG:', adoptionBlurb);

    context.bindings.myOutput = {
      text: adoptionBlurb,
      photo: animalFacts.animalPhoto
    };

    context.res = {
      body: adoptionBlurb
    };

    context.done();
  }

  context.res = {
    body: {}
  };

  context.done();
};
