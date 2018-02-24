import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import SearchParams from "./SearchParams";
import Proposal from "./Proposal";
import ScrollTop from "./ScrollTop";
import FilterPanel from "./FilterPanel";
import Filter from "./Filter";

import { CheapestMark, FastestMark, BestMark } from "./TopMarks";
import { results } from "./data";

const Search = styled.div`
  background-color: #eaeaea;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Proposals = styled.div`
  flex: 1 1 auto;
`;

export default () => {
  return (
    <Search>
      <Helmet>
        <title>Результаты поиска</title>
      </Helmet>
      <div className="container">
        <SearchParams />
        <ScrollTop />
        <Container>
          <FilterPanel />
          <Proposals>
            <CheapestMark />
            <Proposal result={results[0]} />
            <FastestMark />
            <Proposal result={results[1]} />
            <BestMark />
            <Proposal result={results[2]} />
            {results
              .slice(3)
              .map((result, idx) => <Proposal key={idx} result={result} />)}
          </Proposals>
        </Container>
        <Filter />
      </div>
    </Search>
  );
};
