import Text from '../Text/Text';

export default function Mission() {
  const texts = [
    {
      id: 1,
      text: 'W Springfield wierzymy, że zarządzanie pracą zespołu powinno być proste, przejrzyste i efektywne. Naszą misją jest tworzenie narzędzi, które pomagają firmom lepiej organizować zadania, rozwijać relacje z klientami i podejmować decyzje w oparciu o dane.',
    },
    {
      id: 2,
      text: 'Springfield powstał po to, aby zastąpić wiele rozproszonych narzędzi jedną platformą, która wspiera zespoły w codziennej pracy i pozwala skupić się na tym, co naprawdę ważne.',
    },
  ];

  return (
    <section className="mission wrapper pt-20 pb-20" id="mission">
      <h2 className="text-h2 text-center">
        Nasz <span className="gradient-pink-to-green">misja</span>{' '}
      </h2>
      {texts.map((text) => (
        <Text key={text.id} text={text.text} />
      ))}
    </section>
  );
}
