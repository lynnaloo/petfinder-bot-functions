module.exports = function (context, data) {
  
  if (data && data.body) {
      const animals = data.body.animals || [];
      const totalAnimals = animals.length;
      const randomAnimal = animals[Math.floor(Math.random() * totalAnimals)];

      console.log('debug:', animals);
      console.log('debug:', randomAnimal);

      const animalFacts = {
        animalUrl: randomAnimal.url,
        animalType: randomAnimal.type,
        animalAge: randomAnimal.age,
        animalBreed: randomAnimal.breeds ? randomAnimal.breeds.primary : '',
        animalPhoto: randomAnimal.photos[0].small,
        animalGender: randomAnimal.gender,
        animalName: randomAnimal.name
      };

      const adoptionBlurb = `Hi! My name is ${animalFacts.animalName}. I am a ${animalFacts.animalAge} ${animalFacts.animalGender} ${animalFacts.animalBreed}. Checkout my adoption link for more information! ${animalFacts.animalUrl}`;
      console.log('DEBUG:', adoptionBlurb);

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