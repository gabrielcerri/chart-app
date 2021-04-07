import React from "react";
import { Flex, Spinner, Text, Heading } from "@chakra-ui/react";
import { getPopulation } from "../api/population";

export const Chart = () => {
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
  if (loading) {
    return (
      <Flex align="center" justify="center" h="97vh" w="100%">
        <Spinner size="xl" />
      </Flex>
    );
  } else if (error) {
    <Text>{error}</Text>;
  }

  return (
    <Flex direction="row" wrap="wrap" p="3.5rem" justify="center">
      {countries.map((country) => (
        <Flex
          m="0.5rem"
          border="3px solid #c2c2c2"
          direction="column"
          borderRadius="8px"
          p="1.5rem"
          w="300px"
        >
          <Heading as="h3" size="lg" mb="1rem">
            {country.name}
          </Heading>
          <Text>{country.population}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
