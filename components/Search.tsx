import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import styles from 'Styles/Search.module.css';
import EventsInput from './EventsInput';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  const [term, setTerm] = useState<string>();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm('');
  };
  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <EventsInput
          icon={<SearchIcon style={{ color: '#fff' }} fontSize='medium' />}
          className={styles.input}
          type='text'
          value={term}
          placeholder='Search...'
          onChange={(e) => setTerm(e.target.value!)}
        />
      </form>
    </Grid>
  );
};

export default Search;
