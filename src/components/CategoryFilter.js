function CategoryFilter({categories, selected, setSelected}) {

  function handleClick(category) {
    setSelected(category === "All" ? null : category); 
  }
   

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
        <button key={category} onClick={()=> handleClick(category)} className={selected === category ? "selected" : ""}>
          {category}
        </button>
      )
      })}
    </div>
  );
}

export default CategoryFilter;
