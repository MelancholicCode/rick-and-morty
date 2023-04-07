import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { apiUrl } from "./utils/constants";

import Pagination from "./components/UI/Pagination";
import CharList from "./components/CharList";

const StyledApp = styled.div`
min-height: 100vh;
`;

function App() {
  const [page, setPage] = useState(1);
  const {isLoading, error, data, isSuccess} = useQuery(['chars', page], () => fetchChars(page));

  async function fetchChars(page) {
      const res = await fetch(`${apiUrl}character?page=${page}`)
      return await res.json();
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  
  return (
    <StyledApp>
      {isSuccess && 
        <div>
          <CharList chars={data.results}/>
          <Pagination totalPages={data.info.pages} currentPage={page} setPage={setPage}/>
        </div>
      }
    </StyledApp>
  );
}

export default App;
