
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product"; 
import "./App.css";

const App = () => {
  const firstName = "Nike Jordan";

  return (
    <div className="container mt-5">
      
      <Card
        className="text-center shadow-lg"
        style={{ width: "24rem", margin: "0 auto", borderRadius: "15px" }}
      >
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
            <Price />
          </Card.Text>
          <Button variant="dark" className="mt-3">
            Buy Now
          </Button>
        </Card.Body>
      </Card>

      {/* Section d'accueil */}
      <div className="text-center mt-4">
        <h2>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h2>
        {firstName && product.image && (
          <img
            src={product.image}
            alt="Product"
            style={{
              width: "100px",
              borderRadius: "50%",
              marginTop: "10px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
