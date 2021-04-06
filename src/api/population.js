export const getPopulation = async () => {
  const response = await window.fetch(
    "https://restcountries.eu/rest/v2/regionalbloc/usan"
  );

  if (!response.ok) {
    throw new Error("Estamos teniendo problemas en el servidor, intenta luego");
  } else {
    const data = response.json();
    return data;
  }
};
