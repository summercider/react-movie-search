import { generatePagination } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Pagenation({ page, totalPage, setPage }) {
  console.log(generatePagination(page, totalPage));
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    // page나 totalpage 변경시마다 페이지번호 배열생성해 배열state업데이트
    const arr = generatePagination(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="flex gap-x-[2px] justify-center mt-[20px]">
      {page !== 1 && (
        <button
          className="btn h-[30px] w-[36px] text-[13px] px-[2px]"
          onClick={() => setPage(page - 1)}
        >
          이전
        </button>
      )}
      {pageArr.map((item, index) => {
        if (item === '...') {
          return (
            <span
              className=" h-[30px] w-[36px] text-[13px] px-[2px] border leading-[28px]
              text-center border-[#666]"
              key={index}
            >
              ...
            </span>
          );
        } else {
          return (
            <button
              type="button"
              className={`btn ${
                page === item ? 'text-white bg-[#666]' : ''
              } h-[30px] w-[36px] text-[13px] px-[2px] `}
              key={index}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          );
        }
      })}

      {page !== totalPage && (
        <button
          className="btn h-[30px] w-[36px] text-[13px] px-[2px]"
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      )}
    </div>
  );
}
