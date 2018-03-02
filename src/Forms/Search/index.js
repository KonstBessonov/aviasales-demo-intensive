import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import SearchParams from "./SearchParams";
import Proposal from "./Proposal";
import ScrollTop from "./ScrollTop";
import FilterPanel from "./FilterPanel";
import Filter from "./Filter";

import TopMark from "./TopMarks";
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
      <SearchParams />
      <div className="container">
        <ScrollTop />
        <Container>
          <FilterPanel />
          <Proposals>
            <TopMark mark="cheapest" />
            <Proposal result={results[0]} />
            <TopMark mark="fastest" />
            <Proposal result={results[1]} />
            <TopMark mark="best" />
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
