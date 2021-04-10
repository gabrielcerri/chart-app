import React from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { getPopulation } from "../api/population";
import { Bar } from "react-chartjs-2";

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

  const dynamicLabels = countries.map((country) => {
    return country.name;
  });

  const dynamicData = countries.map((country) => {
    return country.population;
  });

  const genData = {
    labels: dynamicLabels,
    datasets: [
      {
        label: "Scale",
        data: dynamicData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",

        borderColor: "rgba(255, 99, 132, 1)",

        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
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
    <Flex width="50%">
      <Bar data={genData} options={options} />
    </Flex>
  );
};
