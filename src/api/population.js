export const getPopulation = async () => {
  const response = await window.fetch(
    `https://restcountries.com/v3.1/region/americas`
  );

  if (!response.ok) {
    throw new Error("Estamos teniendo problemas en el servidor, intenta luego");
  } else {
    const data = response.json();
    console.log(data);
    return data;
  }
};
