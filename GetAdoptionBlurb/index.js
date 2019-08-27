module.exports = function(context, data) {
  const Util = require('../lib/utilities');
  const util = new Util();

  if (data && data.body) {
    const animal = data.body;
    const adoptionBlurb = `${util.getAdoptionText(animal.animalName, animal.animalGender, animal.animalBreed, animal.animalUrl, animal.animalCity, animal.animalState)}`;
    console.log('DEBUG:', adoptionBlurb);

    context.res = {
      body: adoptionBlurb
    };

    context.done();
  }

  context.res = {
    status: 400,
    body: 'Please pass an object in the request body'
  };

  context.done();

};
