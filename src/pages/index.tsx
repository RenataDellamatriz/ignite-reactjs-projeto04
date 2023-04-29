import { HomeContainer, Product } from "@/styles/pages/home";
import { styled } from "../styles";
import Image from "next/image";
import camiseta1 from '../assets/camisetas/Shirt-1.png'
import camiseta2 from '../assets/camisetas/Shirt-2.png'
import camiseta3 from '../assets/camisetas/Shirt-3.png'


const Button = styled('button', {
  backgroundColor: '$green300',

  '&:hover': {
    backgroundColor: "White"
  }
})

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image alt="" src={camiseta1}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image alt="" src={camiseta2}/>
        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>   <Product>
        <Image alt="" src={camiseta2}/>
        <footer>
          <strong>Camiseta z</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
