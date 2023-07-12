/* eslint-disable react/jsx-key */
import CardProduct from "../components/Fragments/CardProduct";
import imgJordan from "../assets/fashion-shoes-sneakers.jpg";
import imgSneakers from "../assets/sneakers.jpg";
import Button from "../components/Elements/Button";

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
    id: 2,
    name: "Jordan",
    price: "800.000",
    image: imgJordan,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  return (
    <>
      <div className="justify-end flex h-10 bg-blue-600 text-white items-center px-10">
        <h1>{email}</h1>
        <Button style="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.CardHeader image={product.image} />
            <CardProduct.CardBody name={product.name}>
              {product.description}
            </CardProduct.CardBody>
            <CardProduct.CardFooter price={`Rp. ${product.price}`} />
          </CardProduct>
        ))}
      </div>
    </>
  );
}
