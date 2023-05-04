import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string
  };
}

export default function Product({product}: ProductProps) {
  const {isFallback} = useRouter()

  if ( isFallback) {
    return <p>loading...</p>
  }

  return (
    <ProductContainer key={product.id}>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={520} height={480}/>
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>
         {product.description}
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: { id: 'prod_Nof8bK9gBTxKE9'}} // colocar só o essencial ou nada -> []
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params ? params.id : "This product doesn't exist";

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  let formattedPrice;
  if (price.unit_amount) {
    formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100);
  } else {
    formattedPrice = "Product does not exist";
  }

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formattedPrice,
        description: product.description
      },
    },
    revalidate: 60 * 60 * 1, //1 hour
  };
};
