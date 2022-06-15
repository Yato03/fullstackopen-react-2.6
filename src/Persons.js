export const Persons = ({ persons, filter }) => {
  const mostrar = persons
    .filter((p) => p.name.toUpperCase().includes(filter.toUpperCase()))
    .map((p) => (
      <p key={p.name}>
        {p.name}: {p.phone}
      </p>
    ));

  return <div>{mostrar}</div>;
};
