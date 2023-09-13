import { Title } from '@mantine/core';
import logoImg from '@shared/assets/images/logo.png';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const Logo = () => {
  return (
    <Title className={styles.title} order={1}>
      <Link className={styles.link} to="/">
        <img alt="Index" className={styles.logo} src={logoImg} />
        Google Books
      </Link>
    </Title>
  );
};
