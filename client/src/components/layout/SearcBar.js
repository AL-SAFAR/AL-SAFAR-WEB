import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
const SearchBar = () => {
  return (
    <Form inline>
      <FormControl
        type='text'
        placeholder='Search Guides'
        className='mr-sm-1'
      />
      <Button size='md' variant='outline-success'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
