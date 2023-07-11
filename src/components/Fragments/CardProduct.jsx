/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3">
      {children}
    </div>
  );
};

const CardHeader = (props) => {
  const { image } = props;

  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const CardBody = (props) => {
  const { children, title } = props;

  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const CardFooter = (props) => {
  const { price } = props;

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button style="bg-blue-600" >Add to cart</Button>
    </div>
  )
};

CardProduct.CardHeader = CardHeader;
CardProduct.CardBody = CardBody;
CardProduct.CardFooter = CardFooter;

export default CardProduct;
