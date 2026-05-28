import { AuthContext } from '@app/contextAPI/Auth';
import { routes } from '@app/routes';
import { concatClasses } from '@shared/utils';
import { type JSX, memo, useContext } from 'react';
import { NavLink } from 'react-router';

import styles from './HomePage.module.scss';

const HomePage = (): JSX.Element => {
  const { isAuth } = useContext(AuthContext);

  const features = [
    'Учет средств медицинских измерений',
    'Планирование поверок',
    'Формирование списков на поверку',
    'Планирование годового бюджета поверок',
  ];

  return (
    <div className={styles['page-content']}>
      <h2 className={styles['page-title']}>Метрологический учет</h2>
      <section className={concatClasses(styles.features, styles.section)}>
        <h3 className={styles['features-title']}>Основные возможности приложения</h3>
        <ul className={styles['features-list']}>
          {features.map((feature, index) => (
            <li className={styles.feature} key={index}>
              &#x2713; {feature}
            </li>
          ))}
        </ul>
      </section>
      {!isAuth && (
        <section className={concatClasses(styles.auth, styles.section)}>
          <p>
            <NavLink className={styles.link} to={routes.login.getLink()}>
              Войти
            </NavLink>{' '}
            или{' '}
            <NavLink className={styles.link} to={routes.registry.getLink()}>
              Зарегистрироваться
            </NavLink>{' '}
            чтобы начать пользоваться приложением
          </p>
        </section>
      )}
    </div>
  );
};

export default memo(HomePage);
