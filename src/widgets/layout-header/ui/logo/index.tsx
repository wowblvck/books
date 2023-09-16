import { Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { logo } from '@shared/assets';

import styles from './styles.module.scss';

export const Logo = () => {
  return (
    <Title className={styles.title} order={1}>
      <Link className={styles.link} to="/">
        <img alt="Index" className={styles.logo} src={logo} />
        Google Books
      </Link>
    </Title>
  );
};
