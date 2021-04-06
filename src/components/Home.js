import { Flex } from "@chakra-ui/layout";
import React from "react";
import { getPopulation } from "../api/population";

export const Home = () => {
  const [state, setState] = React.useState({
    loading: false,
    countries: [],
    error: null,
  });

  const { loading, countries, error } = state;

  React.useEffect(() => {
    const doFetchCountries = async () => {
      setState({ loading: true, countries: [], error: null });

      try {
        const results = await getPopulation();
        setState({ loading: false, countries: [...results], error: null });
      } catch (e) {
        setState({ loading: false, countries: [], error: e.message });
      }
    };

    doFetchCountries();
  }, []);

  console.log("countries", countries);

  return (
    <Flex>
      {countries.map((countries) => (
        <Flex>{countries.population}</Flex>
      ))}
    </Flex>
  );
};
