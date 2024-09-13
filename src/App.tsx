import Seta from "./seta";
import imgagemEscolhida from "./assets/foto.jpeg";

function App() {
  return (
    <>
      <div className="   bg-black w-full h-full text-slate-50 flex justify-center">
        <div className="w-2/4 ">
          <div className="flex m-4 max-sm:grid max-sm:grid-cols-1">
            <div className="mx-3">
              {" "}
              <img
                className=" w-28 h-28 max-sm:w-20 max-sm:h-20  rounded-full"
                src={imgagemEscolhida}
                alt="foto de perfil do thiago"
              />
            </div>
            <div>
              <div className="font-bold text-2xl">Thiago Chaves</div>

              <div className="">Desnvolvedor FullStack pleno</div>
              <div className=" hover:underline">
                <a
                  href="https://github.com/ThiagoOFC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ThiagoOFC
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold pt-4 pb-4 ">Sobre</h1>
            <p className=" ">
              Sou um desenvolvedor de software que adora automação e
              desenvolvimento web, sempre em busca de novas tecnologias. Meu
              estilo de trabalho é sempre oferecer a melhor qualidade de
              software nos projetos em que atuo, implementando as melhores
              práticas e ajudando meus colegas e a empresa a crescer.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold pt-4 pb-4 ">
              Experiencia de trabalho
            </h1>
            <div className="grid grid-cols-2 pb-2 max-sm:grid-cols-1 max-sm:mb-2">
              <p> 2024 - Presente</p>
              <div>
                <a
                  href="https://seatelecom.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline "
                >
                  Densenvolvedor FullStack pleno - Sea telecom
                </a>
                <p>
                  Atuando em projetos operacionais de grande relevância. React •
                  Vite • Redux • Tailwind • Shadcn • Framer Motion • Nodejs •
                  Postgresql • NestJS • Redis
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 pb-2 max-sm:grid-cols-1 max-sm:mb-2">
              <p> 2023 - 2024</p>
              <div>
                <a
                  href="https://seatelecom.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline "
                >
                  Densenvolvedor FullStack Junior - Sea telecom
                </a>
                <p>
                  Colaborei como peça-chave na equipe de desenvolvimento, sendo
                  o membro com mais tempo de empresa e, por isso, com profundo
                  conhecimento dos procedimentos internos e da estrutura do
                  banco de dados do ERP utilizado. React • Vite • Redux •
                  Tailwind • Shadcn • Framer Motion • Nodejs • Postgresql •
                  NestJS • Redis
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 pb-2 max-sm:grid-cols-1 max-sm:mb-2">
              <p> 2022 - 2023</p>
              <div>
                <a
                  href="https://seatelecom.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline "
                >
                  Estagiario em desenvolvimento e infraestrutura(cloud) - Sea
                  telecom
                </a>
                <p>
                  Em conjunto com a equipe de infraestrutura, realizei o
                  provisionamento de instâncias e serviços na cloud privada
                  OpenStack. Também fui responsável pela criação de automações
                  de provisionamento utilizando Ansible. Posteriormente, fui
                  transferido para a equipe de desenvolvimento como o segundo
                  desenvolvedor, onde participei na criação de uma aplicação que
                  utiliza o protocolo TR-069 para gerenciar a rede de ONUs da
                  telecom. React • Vite • Tailwind • Nodejs • Postgresql • NestJS
                  • Redis • Ansible • OpenStack • docker • TerraForm
                </p>
              </div>
            </div>
          </div>
          <div className="max-sm:hidden">
            <h1 className="text-xl font-semibold pt-4 pb-4 ">Links</h1>
            <div className="grid grid-cols-2 pb-2 max-sm:grid-cols-1 max-sm:mb-2">
              <h1>Github</h1>
              <a
                href="https://github.com/ThiagoOFC"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                ThiagoOFC
              </a>

              <h1>Linkedim</h1>
              <a
                href="https://www.linkedin.com/in/thiago-oliveira-771006235"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Thiago Oliveira
              </a>

              <h1>WhatsApp</h1>
              <a
                href="https://wa.me/+5591985713324"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +5591985713324
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 m-4 max-sm:m-13 max-sm:w-full ">
            <Seta
              nome={"Github"}
              link={"https://github.com/ThiagoOFC"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              }
            />
            <Seta
              nome={"Linkedin"}
              link={"https://www.linkedin.com/in/thiago-oliveira-771006235"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              }
            />
            <Seta
              nome={"WhatsApp"}
              link={"https://wa.me/+5591985713324"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
