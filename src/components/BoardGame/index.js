import Adjectives from "../Adjectives";
import Cards from "../Cards";
import Score from "../Score";
import { BoardGameContainer, WrapperCards } from "./styles";

const BoardGame = () => {
  return (
    <BoardGameContainer>
      <h1>Escolha uma característica:</h1>

      <WrapperCards>
        <Cards theme="red" player="Você" />
        <Adjectives />
        <Cards player="Computador" />
      </WrapperCards>

      <Score />
    </BoardGameContainer>
  );
};

export default BoardGame;
