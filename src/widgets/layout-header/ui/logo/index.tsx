import { Title, Text, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import { logo } from '@shared/assets';

import styles from './styles.module.scss';

export const Logo = () => {
  return (
    <Title className={styles.title} order={1}>
      <Link className={styles.link} to="/">
        <Image alt="Index" className={styles.logo} w={80} src={logo} />
        <Text fz={{ xs: 30, sm: 34 }}>Google Books</Text>
      </Link>
    </Title>
  );
};
