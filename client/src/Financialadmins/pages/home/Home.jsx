import React from 'react'
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  widgetLg:{
    [theme.breakpoints.down("sm")]:{
    display:"none",
    }
  }


}));
export default function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
    <div className="home">
      <FeaturedInfo />
      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      <div className="homeWidgets">
         {/* <WidgetSm/> */}
       <WidgetLg/>
      </div> 
    </div>
    </Container>
  );
}
