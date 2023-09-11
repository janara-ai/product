import { useState, useEffect } from "react";

import {
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
  CardBody,
  Input,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

export const Product = ({ getMenuObject }) => {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("s");
  const navigate = useNavigate();
  console.log(navigate);
  const defaultQuery = "s";

  const fetchData = async () => {
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?f=${
        searchQuery ? searchQuery.slice(0, 1) : defaultQuery
      }`
    );
    const data = await res.json();
    setMeals(data.meals);
  };
  useEffect(() => {
    fetchData();
  }, [searchQuery]);
  const handleClick = (meal) => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
      navigate("/instructions");
      getMenuObject(meal);
    } else {
      alert("please log in first");
      navigate("/login");
    }
  };
  return (
    <>
      <Input
        id="exampleEmail"
        name="text"
        placeholder="search your favorite food"
        type="email"
        style={{ padding: "10px" }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="menu">
        {!!meals.length &&
          meals.map((meal) => {
            return (
              <div>
                <Card
                  style={{
                    width: "18rem",
                    height: "70vh",
                  }}
                >
                  <img alt="Sample" src={meal.strMealThumb} />
                  <CardBody>
                    <CardTitle tag="h5">{meal.strMeal}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {meal.strCategory}
                    </CardSubtitle>
                    <CardText>{meal.strTags}</CardText>
                    <Button onClick={() => handleClick(meal)}>More</Button>
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};
