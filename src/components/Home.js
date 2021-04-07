import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export const Home = () => {
  // const [state, setState] = React.useState({
  //   loading: false,
  //   countries: [],
  //   error: null,
  // });

  // const { loading, countries, error } = state;

  // React.useEffect(() => {
  //   const doFetchCountries = async () => {
  //     setState({ loading: true, countries: [], error: null });

  //     try {
  //       const results = await getPopulation();
  //       setState({ loading: false, countries: [...results], error: null });
  //     } catch (e) {
  //       setState({ loading: false, countries: [], error: e.message });
  //     }
  //   };

  //   doFetchCountries();
  // }, []);

  // console.log("countries", countries);

  // if (loading) {
  //   return (
  //     <Flex align="center" justify="center" h="97vh" w="100%">
  //       <Spinner size="xl" />
  //     </Flex>
  //   );
  // } else if (error) {
  //   <Text>{error}</Text>;
  // }
  return (
    <Flex>
      <Heading as="h1" size="4xl" isTruncated>
        {" "}
        🗺️ ¡Welcome to chart-country-population! 🗺️{" "}
        <Heading as="h4" justifyContent="center" marginTop="5">
          Click on the menu to see the charts by region
        </Heading>
      </Heading>
    </Flex>
  );
};
