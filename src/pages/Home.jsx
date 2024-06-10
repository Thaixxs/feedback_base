import { CardContainer, IconContainer, ButtonCointainer} from "./Home.styles";

import iconStarimg from "../assets/icon-star.svg"

export function Home() {
  return (
      <CardContainer>
        <IconContainer>
          <img src={iconStarimg} alt="ícone de estrela" />
        </IconContainer>

        <h1>Como foi o atendimento?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <ButtonCointainer>
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <button>4</button>
           <button>5</button>
        </ButtonCointainer>

        <button>Enviar</button>

      </CardContainer>
  )
}


