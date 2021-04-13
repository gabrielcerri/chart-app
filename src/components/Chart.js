import React from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { getPopulation } from "../api/population";
import { HorizontalBar } from "react-chartjs-2";

export const Chart = () => {
  const [state, setState] = React.useState({
    loading: false,
    countries: [],
    error: null,
  });

  const { loading, countries, error } = state;

  console.log(getPopulation());

  React.useEffect(() => {
    const doFetchCountries = async () => {
      setState({ loading: true, countries: [], error: null });
      try {
        const results = await getPopulation();
        setState({ loading: false, countries: results, error: null });
      } catch (e) {
        setState({ loading: false, countries: [], error: e.message });
      }
    };
    doFetchCountries();
  }, []);

  const dynamicLabels = countries.map((country) => {
    return country.name;
  });

  const dynamicData = countries.map((country) => {
    return country.population;
  });

  const dynamicRegion = countries.slice(0, 1).map((country) => {
    return country.regionalBlocs[0].acronym;
  });

  console.log(dynamicData);

  const genData = {
    labels: dynamicLabels,
    datasets: [
      {
        label: "Population",
        data: dynamicData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",

        borderColor: "rgba(255, 99, 132, 1)",

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    title: {
      text: `Population of ${dynamicRegion} `,
      display: true,
    },
    scales: {
      xAxes: [
        {
          type: "logarithmic",
          ticks: {
            autoSkip: true,
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

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
    <Flex width="90%">
      <HorizontalBar data={genData} options={options} />
    </Flex>
  );
};
