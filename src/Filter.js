export const Filter = ({ filtro, cambiarFiltro }) => {
  return (
    <p>
      filter shown with:
      <input type="text" value={filtro} onChange={cambiarFiltro} />
    </p>
  );
};
