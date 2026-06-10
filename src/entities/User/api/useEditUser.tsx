import { AuthContext } from '@app/contextAPI/Auth';
import type { ModalContextType } from '@app/contextAPI/Modal';
import { ModalContext } from '@app/contextAPI/Modal/ModalContext.ts';
import { UserSchema } from '@entities/User';
import type { EditPassword, EditUser } from '@entities/User/ui/User/types.ts';
import { type ErrorType, fetcher } from '@shared/services';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

export const useEditUser = () => {
  const [editUser, setEditUser] = useState<EditUser | null>(null);
  const [editPassword, setEditPassword] = useState<EditPassword | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const { user, accessToken, loginUser } = useContext(AuthContext);
  const { closeModal } = useContext(ModalContext) as ModalContextType;

  const editUserData = useCallback(async () => {
    controllerRef.current = new AbortController();
    setIsPending(true);
    setError(null);
    try {
      const { login, firstName, lastName } = editUser!;
      const response = await fetcher({
        url: `user/${user!.id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(String(login) === user!.login ? { firstName, lastName } : editUser!),
        signal: controllerRef.current.signal,
      });
      if (response.ok) {
        const json = await response.json();
        const editedUser = UserSchema.parse(json);
        loginUser({ access_token: accessToken!, user: editedUser });
      } else {
        const json: ErrorType = await response.json();
        throw new Error(json.message);
      }
      setIsPending(false);
      closeModal();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Что-то пошло не так');
      }
      setIsPending(false);
    }
  }, [accessToken, closeModal, editUser, loginUser]);

  const editUserPassword = useCallback(async () => {
    controllerRef.current = new AbortController();
    setIsPending(true);
    setError(null);
    try {
      const response = await fetcher({
        url: `user/${user!.id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(editPassword),
        signal: controllerRef.current.signal,
      });
      if (response.ok) {
        closeModal();
      } else {
        const json: ErrorType = await response.json();
        throw new Error(json.message);
      }
      setIsPending(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Что-то пошло не так');
      }
      setIsPending(false);
    }
  }, [accessToken, closeModal, editPassword, user]);

  useEffect(() => {
    if (editUser) {
      editUserData();
    }
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [editUser, editUserData]);

  useEffect(() => {
    if (editPassword) {
      editUserPassword();
    }
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [editPassword, editUserPassword]);

  return { setEditPassword, setEditUser, isPending, error } as const;
};
