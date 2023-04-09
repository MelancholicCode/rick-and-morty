import { useState } from 'react';
import { useQuery } from 'react-query';
import { apiUrl } from '../../utils/constants';

import { SearchForm, SearchIcon, SearchInput } from './index.styled';
import { Icon } from '../UI';
import SearchTips from '../SearchTips';

import { search } from '../../img/icons';

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
    <SearchForm {...props} onSubmit={e => e.preventDefault()}>
      <SearchInput value={inputValue} onChange={e => onChangeQuery(e.target.value)} placeholder='Enter the name'/>
      <SearchIcon>
        <Icon src={search} width="20px" height="20px"/>
      </SearchIcon>
      {inputValue && data?.results && <SearchTips onCharModal={onCharModal} setQuery={setQuery} chars={data.results}/>}
    </SearchForm>
  );
};

export default CharSearch;