export default function Ai() {
  const ai = [
    {
      id: 1,
      title: 'Natychmiastowe wsparcie 24/7',
      text: 'Zawsze gotowa do pomocy - bez czekania, bez kolejek.',
      style: 'gradient-pink-to-blue ',
    },
    {
      id: 2,
      title: 'Szybkie odpowiedzi na pytania',
      text: 'Błyskawicznie znajduje informacje i podpowiada rozwiązania.',
      style: 'gradient-pink-to-green',
    },
    {
      id: 3,
      title: 'Wsparcie w podejmowaniu decyzji',
      text: 'Analizuje dane i pomaga wyciągać trafne wnioski.',
      style: 'gradient-blue-to-green',
    },
    {
      id: 4,
      title: 'Oszczędność czasu',
      text: 'Redukuje potrzebę ręcznego wyszukiwania informacji i wykonywania powtarzalnych czynności.',
      style: 'gradient-blue-to-pink',
    },
    {
      id: 5,
      title: 'Lepsza organizacja pracy',
      text: 'Pomaga porządkować zadania, przypomina o priorytetach i wspiera koncentrację.',
      style: 'gradient-green-to-pink',
    },
    {
      id: 6,
      title: 'Intuicyjna komunikacja',
      text: 'Rozumie naturalny język - możesz rozmawiać z nią tak, jak z członkiem zespołu.',
      style: 'gradient-green-to-blue',
    },
  ];

  return (
    <section className="ai wrapper text-body pt-20 pb-20">
      <h2 className="text-h2 m-5 text-center">
        Zrób <span className="gradient-green-to-pink">wszystko szybciej</span> z
        asystentem AI
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <h3 className="text-h3 font-bold">
              Masz problem? Zapytaj Spring - inteligentną asytentkę AI
            </h3>
            <div className="text-body-sm">
              <p className="p-2">
                Spring to Twoja prywatna asystentka AI, która wspiera codzienną
                pracę zespołu i automatyzuje kluczowe procesy biznesowe. To
                nowoczesne narzędzie stworzone dla firm, które chcą pracować
                szybciej, mądrzej i efektywniej.
              </p>

              <h4 className="text-h4 font-bold">
                Dlaczego warto korzystać ze Spring - asystentki AI?
              </h4>
              <ul>
                {ai.map((ai) => (
                  <li key={ai.id} className="m-5">

                      <strong
                        className={`text-body before:content-['•'] ${ai.style}`}
                      >
                        {ai.title}
                      </strong>

                    <ul>
                      <li className="pl-6">{ai.text}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img className="max-w-[80%]" src="/ai/spring-AI.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
