import { Fragment } from "react";
import classes from "./TopSelling.module.css";
import Card from "../UI/Card";
import ShowItem from "./ShowItem/ShowItem";
const DUMMY_SHOWS = [
  {
    id: "s1",
    name: "Shania Twain",
    description: "Neque porro quisquam est ",
    price: 22.99,
  },
  {
    id: "s2",
    name: "Stray Kids",
    description: "Neque porro quisquam est ",
    price: 16.5,
  },
  {
    id: "s3",
    name: "Barbecue Burger",
    description: "Neque porro quisquam est ",
    price: 12.99,
  },
  {
    id: "s4",
    name: "Sabrina Carpenter",
    description: "Neque porro quisquam est ",
    price: 18.99,
  },
];
const TopSellingShows = () => {
  const showsList = DUMMY_SHOWS.map((show) => {
    return (
      <ShowItem
        key={show.id}
        name={show.name}
        description={show.description}
        price={show.price}
      ></ShowItem>
    );
  });
  return (
    <Fragment>
      <section className={classes.shows}>
        <Card>
          <ul>{showsList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};
export default TopSellingShows;
