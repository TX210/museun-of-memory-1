import { FC, memo } from 'react';

type CardP = {
  title?: string
  description?: string,
  imgSrc?: string
};

const Card:FC<CardP> = ({title = '', description = '', imgSrc = ''}) => {
  return (
    <div className="flex flex-col rounded-lg border overflow-hidden shadow-lg h-[460px] md:h-[560px]" >
      {!!imgSrc && <div className="flex-1 transition-opacity duration-300 ease-in-out hover:opacity-75 overflow-hidden" >
        <img alt={title} src={imgSrc}   className="h-full w-full object-cover"/>
      </div>}
      <div className="p-4 grid gap-2">
        {!!title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
        {!!description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  )
};

export default memo(Card);
