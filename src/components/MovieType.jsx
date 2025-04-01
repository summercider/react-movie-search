const initTypes = ['All', 'Movie', 'Series', 'Episode'];

export default function MovieType({ type, setType, setPage }) {
  function handleType(e) {
    // console.log(e.target.innerText);
    //value를 지정안해서 innertext로 확인함
    //All type은 Api에 없어서 All인경우 type를 "" 처리
    if (e.target.innerText === 'All') {
      setType('');
    } else {
      setType(e.target.innerText);
    }
    // console.log(type);
    setPage(1);
  }

  return (
    <div>
      {initTypes.map((item) => (
        <button
          type="button"
          key={item}
          className={`btn 
          leading-[28px]
          text-[14px] border-r-0 
          last:border-r-[1px]
          border-[#ddd]
          ${
            type === (item === 'All' ? '' : item)
              ? 'text-[white] bg-[#666] '
              : 'bg-[#eee]'
          }`}
          // 동일 css의 경우 1.조건이 아닐떄 , 2조건에 맞을떄
          // button에 공통 #eee 주고  조건식 ""주면 안먹음 > 공통#eee조건식으로내려적용
          onClick={handleType}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
