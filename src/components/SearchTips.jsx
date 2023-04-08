import styled from 'styled-components';

const TipsList = styled.ul`
overflow-y: auto;
background-color: #fff; 
border: 1px solid #eee;
border-radius: 10px;
position: absolute;
top: 120%;
left: 0;
width: 100%;
max-height: 200px;
display: flex;
flex-direction: column;
`;

const TipsItem = styled.li`
cursor: pointer;
padding: 10px;
border: 1px solid #eee;
`;

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