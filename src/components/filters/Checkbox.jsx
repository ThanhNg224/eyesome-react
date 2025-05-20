import { useProductsContext } from "../../contexts";

const Checkbox = ({ data }) => {
  const {
    applyFilters,
    filters: { categories },
  } = useProductsContext();

  const isChecked = categories.includes(data.value);

  const checkboxHandler = (e) => {
    let catArr = categories;
    if (e.target.checked) {
      catArr.push(data.value);
    } else {
      catArr = catArr.filter((cat) => cat !== data.value);
    }
    applyFilters(e.target.name, catArr);
  };

  return (
    <label className="capitalize cursor-pointer">
      <input
        className="accent-[--primary-text-color] me-2 cursor-pointer"
        type="checkbox"
        name="categories"
        value={data.value}
        checked={isChecked}
        onChange={checkboxHandler}
      />
      {data.label}
    </label>
  );
};
export default Checkbox;

