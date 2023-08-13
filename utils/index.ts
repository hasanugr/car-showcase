export async function fetchCars() {
  const baseUrl =
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
  const headers = {
    'X-RapidAPI-Key': '26118bce59msh510941298d6fcccp14bcdajsn1b3cd124c44b',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(baseUrl, { headers });
  const result = await response.json();

  return result;
}
