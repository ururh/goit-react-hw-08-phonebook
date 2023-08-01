import { useDispatch } from 'react-redux';
import { FilterLabel, Icon, InputSearch, SpanFilter } from './Filter.styles';
import { setFilterContacts } from '../../redux/contacts/filtersSlice';
import { svgGood } from './svg/icon';

export function Filter() {
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value));
  };

  return (
    <FilterLabel>Find contacts by name
      <SpanFilter>
        <InputSearch type="text"  onChange={handlerFilter} name="filter" />
        <Icon>{svgGood}</Icon>
      </SpanFilter>
    </FilterLabel>
  );
}
