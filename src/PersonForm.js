export const PersonForm = ({
  handleOnSubmit,
  handleOnChangeName,
  newName,
  handleOnChangeNumber,
  newNumber
}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <div>
          <label>name:</label>
          <input onChange={handleOnChangeName} type="text" value={newName} />
        </div>
        <br />
        <div>
          <label>phone:</label>
          <input
            onChange={handleOnChangeNumber}
            type="text"
            value={newNumber}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
