import { dbRef } from '../../firebase';
import React, { useEffect, useState } from 'react';
import { child, get } from 'firebase/database';
import { NannyItem } from '../NannyItem/NannyItem';
import {
  Button,
  Container,
  Label,
  Select,
  SelectWrap,
  Wrap,
} from './NanniesList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLoading,
  getNannies,
  selectIsLoading,
  selectfilteredNannies,
} from '../../redux/NannySlice';
import { filtersNanyAction } from '../../redux/FiltersSlice';
import { Loader } from 'components/Loader';

const NannyList = () => {
  const [limit, setLimit] = useState(3);
  const [selected, setSelected] = useState('A to Z');
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoading());

    get(child(dbRef, 'Nanny'))
      .then(snapshot => {
        if (snapshot.exists()) {
          dispatch(getNannies(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [dispatch]);

  const options = [
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Popular',
    'Not popular',
    'Show all',
  ];

  const handleSelect = event => {
    console.log(event.target.value, 'event');
    event.preventDefault();
    setSelected(event.target.value);
    dispatch(filtersNanyAction(event.target.value));
    setLimit(3);
  };

  const filteredNannies = useSelector(selectfilteredNannies);
  const filteredNanniesList = filteredNannies.slice(0, limit);

  return (
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
              defaultValue={'DEFAULT'}
            >
              <option value="DEFAULT"> A to Z </option>
              {options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Label>
        </SelectWrap>

        {isLoading && <Loader />}
        {filteredNanniesList.map(nanny => (
          <NannyItem nanny={nanny} id={nanny.id} />
        ))}

        {!isLoading && filteredNanniesList.length % 3 === 0 && (
          <Button type="button" onClick={() => setLimit(limit + 3)}>
            Load more
          </Button>
        )}
      </Container>
    </Wrap>
  );
};

export default NannyList;
