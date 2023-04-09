import { useState } from 'react';
import { useQuery } from 'react-query';
import { apiUrl } from '../../../utils/constants';

import { Container, StyledCharsPage } from './index.styled';
import CharList from '../../CharList';
import CharCard from '../../CharCard';
import CharSearch from '../../CharSearch';
import { FlexWrapper, Modal, Pagination, Spinner } from '../../UI';

const CharsPage = () => {
  const [page, setPage] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const [cardChar, setCardChar] = useState(null);
  const {isLoading, error, data, isSuccess} = useQuery(['chars', page], () => fetchChars(page));

  async function fetchChars(page) {
      const res = await fetch(`${apiUrl}character?page=${page}`)
      return await res.json();
  }

  const onCharModal = (char) => {
    setModalActive(true);
    setCardChar(char);
  }

  const render = () => {
    if (isLoading) return <Spinner/>;
    if (error) return <p>{error.message}</p>;
    if (data) return (
      <>
        <CharSearch onCharModal={onCharModal}/>
        {isSuccess && <CharList onCharModal={onCharModal} chars={data.results}/>}
        <Pagination totalPages={data.info.pages} currentPage={page} setPage={setPage}/>
      </>
    );
  }
  
  return (
    <StyledCharsPage>
      <Modal active={modalActive} setActive={setModalActive}>
        {cardChar && <CharCard char={cardChar} width="400px"/>}
      </Modal>
      <Container>
        <FlexWrapper direction="column" gap="15px" align="center">
          {render()}
        </FlexWrapper>
      </Container>
    </StyledCharsPage>
  );
};

export default CharsPage;