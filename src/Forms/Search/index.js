import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { minWidth } from '../../assets';

import SearchParams from './SearchParams';
import Proposal from './Proposal';
import ScrollTop from './ScrollTop';
import FilterPanel from './FilterPanel';
import Filter from './Filter';
import TopMark from './TopMarks';

import { results } from './data';

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

const MoreResults = styled.button`
  background-color: #00acde;
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 1.75rem;
  line-height: 2.25rem;
  margin-top: 1.5rem;
  padding: 2rem;
  width: 100%;
  display: none;
  ${minWidth.md`
    display: unset;`};
`;

export default () => (
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
          {results.slice(3).map(result => <Proposal key={result.id} result={result} />)}
          <MoreResults>ПОКАЗАТЬ ЕЩЁ 10 БИЛЕТОВ</MoreResults>
        </Proposals>
      </Container>
      <Filter />
    </div>
  </Search>
);
