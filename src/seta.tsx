function Seta({link,nome,svg}:{link:string, nome: string, svg:any}) {
  return (
    <>
      <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
        <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
          <div className="bg-slate-200 flex items-center gap-1 p-2 rounded-md">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-zinc-600"
            >
              <circle stroke-linejoin="round" r="9" cy="12" cx="12"></circle>
              <path
                stroke-linejoin="round"
                d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
              ></path>
              <path
                stroke-linejoin="round"
                d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
              ></path>
              <path stroke-linejoin="round" d="M3 12H21"></path>
              <path stroke-linejoin="round" d="M19.5 7.5H4.5"></path>
              <g filter="url(#filter0_d_15_556)">
                <path stroke-linejoin="round" d="M19.5 16.5H4.5"></path>
              </g>
              <defs>
                <filter
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="3"
                  width="17"
                  y="16"
                  x="3.5"
                  id="filter0_d_15_556"
                >
                  <feFlood
                    result="BackgroundImageFix"
                    flood-opacity="0"
                  ></feFlood>
                  <feColorMatrix
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    type="matrix"
                    in="SourceAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    type="matrix"
                  ></feColorMatrix>
                  <feBlend
                    result="effect1_dropShadow_15_556"
                    in2="BackgroundImageFix"
                    mode="normal"
                  ></feBlend>
                  <feBlend
                    result="shape"
                    in2="effect1_dropShadow_15_556"
                    in="SourceGraphic"
                    mode="normal"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <span>{nome}</span>
          </div>
          <div className="shadow-md bg-gray-50 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
          <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
            <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
          </div>
        </div>

        <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-full cursor-pointer duration-300">
            {svg}
          <a href={link}
                target="_blank"
                rel="noopener noreferrer" className="text-[0px] group-hover:text-sm duration-300">
            Ir para o {nome}
          </a>
        </div>
      </div>
    </>
  );
}
export default Seta