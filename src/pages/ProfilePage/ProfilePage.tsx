import { AuthContext } from '@app/contextAPI/Auth';
import { User } from '@entities/User/ui/User';
import { type JSX, memo, useContext } from 'react';

//import styles from './ProfilePage.module.scss';

const ProfilePage = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <User />
      {user!.role === 'ADMIN' && <></>}
    </>
  );
};

export default memo(ProfilePage);
