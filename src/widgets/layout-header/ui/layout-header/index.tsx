import { Container, Stack } from '@mantine/core';
import { SearchForm } from '@features/search';
import { Logo } from '../logo';
import styles from './styles.module.scss';

export const LayoutHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.blur}>
        <Container className={styles.container}>
          <Stack className={styles.list}>
            <Logo />
            <SearchForm />
          </Stack>
        </Container>
      </div>
    </header>
  );
};
