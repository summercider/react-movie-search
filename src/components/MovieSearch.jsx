import { useRef } from 'react';

export default function MovieSearch({ setTitle, setType }) {
  const inputRef = useRef(null); //일회성은 state안쓰고 ref로 추적만 하셈

  function handleSearch(e) {
    // console.log(e.target, '제출이벤트실행');
    e.preventDefault();
    //검색필드 공백제거해서 내용이 있을떄만 실행
    if (inputRef.current.value.trim()) {
      setType('');
      setTitle(inputRef.current.value); //추적값 확인해서 setTitle으로 titlestate변경
    }
  }

  return (
    <div className="my-[20px] border border-[#ccc]">
      {/* form의 제출시 작동 */}
      <form onSubmit={handleSearch} className="flex">
        <input
          className="border-0 w-full"
          ref={inputRef}
          //ref설정해서 value값 변경확인
          type="search"
          placeholder="제목 검색"
          title="제목검색"
        />
        <button
          type="submit"
          className="w-[60px] bg-[#eee] text-[14px] text-gray-600 shrink-0"
        >
          검색{' '}
        </button>
      </form>
    </div>
  );
}
