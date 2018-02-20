import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import SearchParams from "./SearchParams";
import ResultCard from "./ResultCard";
import ScrollTop from "./ScrollTop";
import Filter from "./Filter";

import { CheapestMark, FastestMark, BestMark } from "./TopMarks";
import { results } from "./data";

const Search = styled.div`
  background-color: #eaeaea;
`;

export default () => {
  return (
    <Search>
      <Helmet>
        <title>Результаты поиска</title>
      </Helmet>
      <SearchParams />
      <ScrollTop />
      <CheapestMark />
      <ResultCard result={results[0]} />
      <FastestMark />
      <ResultCard result={results[1]} />
      <BestMark />
      <ResultCard result={results[2]} />
      {results
        .slice(3)
        .map((result, idx) => <ResultCard key={idx} result={result} />)}
      <Filter />
    </Search>
  );
};
