import "./searchbar.css";
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <div className="input-container">
        <input
          className="input"
          name="text"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search the Pokemon..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
