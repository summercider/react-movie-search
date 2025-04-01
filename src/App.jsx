import MoiveList from '@/components/MoiveList';
import MovieSearch from '@/components/MovieSearch';
import MovieType from '@/components/MovieType';
import Pagenation from '@/components/Pagenation';
import { use, useEffect, useState } from 'react';
// ?Prams=VlaueParams=Value (i=~~apikey=~~ )  <<querystring 서버 데이터전송 get 요청시
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=b3873bd9';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('bbc');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [state, setState] = useState({
    movies: [],
    title: 'bbc',
    type: '',
    page: 1,
    totalPage: 0,
  });

  const updateState = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    //데이터처리는 비동기이기 떄문에 async>await 내가 만든순서대로 오류없게 해주셈 하는거임
    async function searchMovies() {
      try {
        // throw new Error('에러테스트 err값임'); // err 테스트
        const response = await fetch(
          `${API_URL}&s=${title}&type=${type}&page=${page}`
        ); //비동기 fetch로 json객체 받음
        // console.log(response, 'json객체');
        const data = await response.json(); //json객체 data에 js객체로(.json())
        // console.log(data.Search);
        // console.log(data, 'js객체');
        // console.log(data.Search);
        const sortData = data.Search?.sort((a, b) => b.Year - a.Year); //data.Search가 undefined일경우 오류방지
        setMovies(sortData);
        // console.log(data)
        // console.log(data.totalResults)
        // console.log(Math.ceil(data.totalResults / 10));

        setTotalPage(Math.ceil(data.totalResults / 10));
      } catch (err) {
        console.error('데이터전송오류: ', err);
      }
    }
    searchMovies();
  }, [title, type, page]);

  return (
    <div className="p-[20px]">
      <h2 className="text-[40px] text-gray-600">Movie LAND</h2>
      <MovieSearch setTitle={setTitle} setType={setType} setPage={setPage} />
      <MovieType setType={setType} type={type} setPage={setPage} />
      <MoiveList movies={movies} />
      {/* 데이터가 있을떄만 page 렌더링 */}
      {movies && (
        <Pagenation page={page} totalPage={totalPage} setPage={setPage} />
      )}
    </div>
  );
}
