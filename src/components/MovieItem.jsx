import React from 'react';

export default function MovieItem({ movie }) {
  return (
    <li>
      <span className="text-[14px]">{movie.Year}</span>
      <div className="aspect-[9/14] my-[5px] ">
        <img
          className="w-full h-full object-cover rounded-[10px]"
          src={
            movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/400'
          }
          alt={movie.Title}
        />
      </div>
      <div className="flex flex-col  text-gray-600 gap-y-[5px] ">
        <span className="text-[14px]">{movie.Type}</span>
        <strong className="break-all">{movie.Title}</strong>
      </div>
    </li>
  );
}
