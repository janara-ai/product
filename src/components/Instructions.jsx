import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
export const Instructions = ({ menuObject }) => {
  console.log(menuObject);

  return (
    <div>
      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">{menuObject.strMeal}</CardTitle>
          <CardText>{menuObject.strInstructions}</CardText>
          <CardText>
            <small className="text-muted">
              You can check video here:{menuObject.strYoutube}
            </small>
          </CardText>
        </CardBody>
        <CardImg
          alt="Card image cap"
          bottom
          src={menuObject.strMealThumb}
          style={{
            width: "800px",
            height: "400px",
          }}
          width="100%"
        />
      </Card>
    </div>
  );
};
