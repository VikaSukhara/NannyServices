import { useDispatch, useSelector } from 'react-redux';
import { NannyItem } from '../NannyItem/NannyItem.jsx';
import {
  Button,
  Container,
  H3,
  Label,
  Select,
  SelectWrap,
  Wrap,
} from './Favorite.styled.jsx';
import { useState } from 'react';
import { filtersFavoriteAction } from '../../redux/FiltersSlice.jsx';
import { selectfilteredNanniesFavorite } from '../../redux/NannySlice.jsx';

export const FavoriteList = () => {
  const [limit, setLimit] = useState(3);
  const [selected, setSelected] = useState('Popular');
  const dispatch = useDispatch();
  const favourites = useSelector(selectfilteredNanniesFavorite);
  const favouritesList = favourites.slice(0, limit);
  const options = [
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Not popular',
    'Show all',
  ];

  const handleSelect = event => {
    event.preventDefault();
    setSelected(event.target.value);
    dispatch(filtersFavoriteAction(event.target.value));
    setLimit(3);
  };

  return (
    <div>
      <Wrap>
        <Container>
          <SelectWrap>
            <Label>
              Filters
              <Select
                name="select"
                id="position"
                value={selected}
                onChange={handleSelect}
              >
                <option selected>Popular</option>
                {options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Label>
          </SelectWrap>

          {favouritesList.length > 0 ? (
            favouritesList.map(favourite => <NannyItem nanny={favourite} />)
          ) : (
            <H3>You don't have any favorite cars</H3>
          )}
          {favourites.length > 3 &&
            favouritesList.length !== 0 &&
            favouritesList.length % 3 === 0 && (
              <Button type="button" onClick={() => setLimit(limit + 3)}>
                Load more
              </Button>
            )}
        </Container>
      </Wrap>
    </div>
  );
};

export default FavoriteList;
