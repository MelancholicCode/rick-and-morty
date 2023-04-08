import searchImg from '../img/search.svg';
import styled from 'styled-components';
import Icon from './UI/Icon';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { apiUrl } from '../utils/constants';
import SearchTips from './SearchTips';

const SearchForm = styled.form`
position: relative;
display: flex;
align-items: center;
background-color: #fff;
border: 2px solid #eee;
border-radius: 10px;
width: 100%;
max-width: 500px;
padding: 0 10px;
`;

const SearchInput = styled.input`
font-size: 20px;
border: none;
outline: none;
background: transparent;
width: calc(100% - 40px);
`;

const SearchIcon = styled.div`
padding: 10px;
`;

const CharSearch = ({onCharModal, ...props}) => {
  const [timer, setTimer] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const {data} = useQuery(['searchedChars', query], () => fetchChars(query));

  const onChangeQuery = (value) => {
    setInputValue(value);
    clearTimeout(timer);
    setTimer(setTimeout(() => setQuery(value), 1000));
  }

  async function fetchChars(query) {
    if (query.length) {
      const res = await fetch(`${apiUrl}character?name=${query}`);
      return await res.json();
    }
  }

  return (
    <SearchForm {...props}>
      <SearchInput value={inputValue} onChange={e => onChangeQuery(e.target.value)} placeholder='Enter the name'/>
      <SearchIcon>
        <Icon src={searchImg} width="20px" height="20px"/>
      </SearchIcon>
      {inputValue && data && <SearchTips onCharModal={onCharModal} setQuery={setQuery} chars={data.results}/>}
    </SearchForm>
  );
};

export default CharSearch;