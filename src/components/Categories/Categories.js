import { useSelector } from 'react-redux';
// import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const state = useSelector((state) => state.categories);
  const handleStatus = () => {
    console.log(state);
  };

  return (
    <div>
      <button onClick={handleStatus} type="button">CHECK STATUS</button>
    </div>
  );
};

export default Categories;
