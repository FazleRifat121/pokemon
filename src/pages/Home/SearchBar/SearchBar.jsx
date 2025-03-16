import "./searchbar.css";
const SearchBar = () => {
  return (
    <div>
      <div class="input-container">
        <input
          class="input"
          name="text"
          type="text"
          placeholder="Search the internet..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
