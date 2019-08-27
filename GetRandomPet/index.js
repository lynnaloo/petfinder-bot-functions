module.exports = function(context, data) {

  if (data && data.body) {
    const animals = data.body.animals || [];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    console.log('debug:', randomAnimal);

    context.res = {
      body: {
        animalUrl: randomAnimal.url,
        animalType: randomAnimal.type,
        animalAge: randomAnimal.age,
        animalBreed: randomAnimal.breeds ? randomAnimal.breeds.primary : '',
        animalPhoto: randomAnimal.photos[0].small,
        animalGender: randomAnimal.gender,
        animalName: randomAnimal.name,
        animalCity: randomAnimal.contact.address.city,
        animalState: randomAnimal.contact.address.state,
        animalTags: randomAnimal.tags ? randomAnimal.tags : []
      }
    };

    context.done();
  }

  context.res = {
    body: {}
  };

  context.done();
};
