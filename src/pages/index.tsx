import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import camiseta1 from "../assets/camisetas/Shirt-1.png";
import camiseta2 from "../assets/camisetas/Shirt-2.png";
import camiseta3 from "../assets/camisetas/Shirt-3.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48, 
     
    },   
  });

  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image  alt="" src={camiseta1} width={520} height={480} />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image  alt="" src={camiseta2} width={520} height={480} />
        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>{" "}
      <Product className="keen-slider__slide">
        <Image  alt="" src={camiseta3} width={520} height={480} />
        <footer>
          <strong>Camiseta z</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image  alt="" src={camiseta3} width={520} height={480} />
        <footer>
          <strong>Camiseta z</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
