import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cookies() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/")
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-8 py-16">
      <div className="flex flex-col w-full max-w-[40%] space-y-12 bg-white rounded-3xl py-16 px-8">
        <p>
          A sua privacidade é importante para nós. É política do iChei respeitar
          a sua privacidade em relação a qualquer informação sua que possamos
          coletar no site IChei, e outros sites que possuímos e operamos.
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado. Apenas retemos as informações
          coletadas pelo tempo necessário para fornecer o serviço solicitado.{" "}
        </p>

        <p>
          Quando armazenamos dados, protegemos dentro de meios comercialmente
          aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação,
          cópia, uso ou modificação não autorizados. Não compartilhamos
          informações de identificação pessoal publicamente ou com terceiros,
          exceto quando exigido por lei.
        </p>

        <p>
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </p>

        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados. O uso continuado de nosso site será considerado como
          aceitação de nossas práticas em torno de privacidade e informações
          pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do
          usuário e informações pessoais, entre em contacto conosco.
        </p>

        <p>
          O serviço Google AdSense que usamos para veicular publicidade usa um
          cookie DoubleClick para veicular anúncios mais relevantes em toda a
          Web e limitar o número de vezes que um determinado anúncio é exibido
          para você.Para mais informações sobre o Google AdSense, consulte as
          FAQs oficiais sobre privacidade do Google AdSense. Utilizamos anúncios
          para compensar os custos de funcionamento deste site e fornecer
          financiamento para futuros desenvolvimentos. Os cookies de publicidade
          comportamental usados ​​por este site foram projetados para garantir
          que você forneça os anúncios mais relevantes sempre que possível,
          rastreando anonimamente seus interesses e apresentando coisas
          semelhantes que possam ser do seu interesse. Vários parceiros anunciam
          em nosso nome e os cookies de rastreamento de afiliados simplesmente
          nos permitem ver se nossos clientes acessaram o site através de um dos
          sites de nossos parceiros, para que possamos creditá-los adequadamente
          e, quando aplicável, permitir que nossos parceiros afiliados ofereçam
          qualquer promoção que pode fornecê-lo para fazer uma compra.
        </p>

        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o Ichei oferece no site e com caráter enunciativo, mas
          não limitativo: A) Não se envolver em atividades que sejam ilegais ou
          contrárias à boa fé a à ordem pública; B) Não difundir propaganda ou
          conteúdo de natureza racista, xenofóbica, pixbet ou azar, qualquer
          tipo de pornografia ilegal, de apologia ao terrorismo ou contra os
          direitos humanos; C) Não causar danos aos sistemas físicos (hardwares)
          e lógicos (softwares) do IChei, de seus fornecedores ou terceiros,
          para introduzir ou disseminar vírus informáticos ou quaisquer outros
          sistemas de hardware ou software que sejam capazes de causar danos
          anteriormente mencionados.
        </p>

        <div className="flex flex-col w-full space-y-12 bg-white rounded-3xl py-2">
          <button
            className="bg-emerald-950 text-emerald-500 rounded-full py-2 px-2 text-lg font-bold"
            onClick={handleBack}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
