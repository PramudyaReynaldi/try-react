/* eslint-disable react/jsx-key */
import CardProduct from "../components/Fragments/CardProduct";
import imgJordan from "../assets/fashion-shoes-sneakers.jpg";
import imgSneakers from "../assets/sneakers.jpg";

const products = [
  {
    id: 1,
    name: "Sneakers",
    price: "1000.000",
    image: imgSneakers,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
    maxime eligendi unde minus? Doloribus debitis tempore dicta
    cupiditate, totam cumque.`,
  },
  {
    id: 1,
    name: "Jordan",
    price: "800.000",
    image: imgJordan,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  }
];

export default function ProductsPage() {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.CardHeader image={product.image} />
          <CardProduct.CardBody name={product.name}>
            {product.description}
          </CardProduct.CardBody>
          <CardProduct.CardFooter price={`Rp. ${product.price}`} />
        </CardProduct>
      ))}
    </div>
  );
}
