import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const state = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button onClick={handleStatus} type="button">CHECK STATUS</button>
      <h2>{state}</h2>
    </div>
  );
};

export default Categories;
