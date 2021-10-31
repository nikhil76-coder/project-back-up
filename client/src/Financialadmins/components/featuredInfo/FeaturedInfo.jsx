import React from 'react'
import { Box, Grid, makeStyles } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";
const useStyles= makeStyles((theme) =>({
    
      featuredItem:{
        flex: 1,
        margin:" 0px 20px",
        padding: "30px",
        boxSizing: "border-box",
        boxShadow:"0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
        WebkitBoxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
        border:"10px",
        cursor: "pointer",
         height: "250",
        [theme.breakpoints.down("sm")]: {
          height: "150",
        },
      }
}));



export default function FeaturedInfo() {
   const classes = useStyles();
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, md: 2, md: 3 }}>
   
      <Grid item md={4} xs={12} >
      <div className={classes.featuredItem}>
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </Grid>
 
       <Grid item md={4} xs={12}>
        <div className={classes.featuredItem}>
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </Grid> 
        
        <Grid item  md={4} xs={12}>
        <div className={classes.featuredItem}>
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </Grid> 
   
    </Grid>
    </Box>
  );
}
