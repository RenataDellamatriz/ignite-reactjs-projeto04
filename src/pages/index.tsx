import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$green300',

  '&:hover': {
    backgroundColor: "White"
  }
})

export default function Home() {
  return <><Button>Enviar</Button></>;
}
