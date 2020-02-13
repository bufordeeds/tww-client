import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContainer from './components/Card/CardContainer';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function ItemCard({ cart, item, setCart }) {
  const classes = useStyles();

  return (
    <CardContainer
      className={'item-card__container'}
      handleClick={() => setCart([...cart, item])}
    >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.item_image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Order Now - ${item.price.toFixed(2)}
          </Button>
          {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
        </CardActions>
    </CardContainer>
  );
}
