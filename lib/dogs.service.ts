export type DogBreeds = {
	[breed: string]: string[];
};

export const fetchDogBreeds = async () =>
	fetch("https://dog.ceo/api/breeds/list/all")
		.then((resp) => resp.json())
		.then((data) => data.message as DogBreeds);

export const fetchDogBreedImage = async (breed: string, subbreed?: string) => {
	let query = breed;
	if (subbreed) query += `/${subbreed}`;
	return fetch(`https://dog.ceo/api/breed/${query}/images/random`)
		.then((resp) => resp.json())
		.then((data) => data.message as string);
};
