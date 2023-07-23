import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filter-slice';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { Form, Input, Label } from './Filter.module';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={handleFilter}
          value={filter}
        ></Input>
      </Label>
    </Form>
  );
};

export default Filter;
