import { Fragment } from "react";
import ShowsSummary from "./ShowsSummary";
import TopSellingShows from "./TopSellingShows";

const Shows = () => {
  return (
    <Fragment>
      <ShowsSummary></ShowsSummary>
      <TopSellingShows></TopSellingShows>
    </Fragment>
  );
};
export default Shows;
