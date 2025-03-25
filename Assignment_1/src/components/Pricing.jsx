import { Button, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import "../css/pricing.css"

const Pricing = () => {
  const Plans = [
    {
      id: 1,
      planName: "Basic Plan",
      price: "$29",
      feature: {
        f1: "Basic feature access",
        f2: "Email support",
        f3: "1GB storage",
      },
      buttonLabel: "Get Started",
    },
    {
      id: 2,
      planName: "Standard Plan",
      price: "$59",
      feature: {
        f1: "Advanced features",
        f2: "Priority support",
        f3: "10GB storage",
      },
      buttonLabel: "Get Started",
    },
    {
      id: 3,
      planName: "Premium Plan",
      price: "$99",
      feature: {
        f1: "All features",
        f2: "24/7 support",
        f3: "Unlimited storage",
      },
      buttonLabel: "Get Started",
    },
  ];

 const handlePlanClick = (plan)=>{
    console.log(`Selected plan is ${plan.planName}, the price is ${plan.price}/month & the features are ${plan.feature.f1}, ${plan.feature.f2}, ${plan.feature.f3}`);
  }
  return (
    <div className="price_Container">
      {Plans.map((plan, id) => {
        return (
          <div key={id} className="cardContent">
            <CardContent>
              <Typography
                gutterBottom
                sx={{fontSize: 14 }}
                className="plan_name"
              >
                {plan.planName}
              </Typography>
              <span className="price_wrapper">
              <Typography variant="h5" component="div" className="plan_price">
                {plan.price}
              </Typography><p>/month</p>
              </span>
              <Typography variant="span" className="plan_feature">
                <ul>
                  <li>{plan.feature.f1}</li>
                  <li>{plan.feature.f2}</li>
                  <li>{plan.feature.f3}</li>
                </ul>
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className="btn" onClick={()=>handlePlanClick(plan)}>{plan.buttonLabel}</Button>
            </CardActions>
          </div>
        )
      })}
      
    </div>
  );
};

export default Pricing;
