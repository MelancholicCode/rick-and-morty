import { TipsItem, TipsList } from "./index.styled";

const SearchTips = ({chars, onCharModal, setQuery}) => {

  const onOpenModal = (char) => {
    setQuery('');
    onCharModal(char);
  }

  return (
    <TipsList>
      {chars.map(char => (
        <TipsItem onClick={() => onOpenModal(char)} key={char.id}>
          {char.name}
        </TipsItem>
      ))}
    </TipsList>
  );
};

export default SearchTips;