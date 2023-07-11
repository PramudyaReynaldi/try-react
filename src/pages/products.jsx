import CardProduct from "../components/Fragments/CardProduct";
import imgJordan from "../assets/fashion-shoes-sneakers.jpg";
import imgSneakers from "../assets/sneakers.jpg";

export default function ProductsPage() {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.CardHeader image={imgJordan} />
        <CardProduct.CardBody title="Jordan">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          maxime eligendi unde minus? Doloribus debitis tempore dicta
          cupiditate, totam cumque.
        </CardProduct.CardBody>
        <CardProduct.CardFooter price="Rp. 1000.000" />
      </CardProduct>

      <CardProduct>
        <CardProduct.CardHeader image={imgSneakers} />
        <CardProduct.CardBody title="No Brand">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          maxime eligendi unde minus? Doloribus debitis tempore dicta
          cupiditate, totam cumque.
        </CardProduct.CardBody>
        <CardProduct.CardFooter price="Rp. 8000.000" />
      </CardProduct>
    </div>
  );
}
