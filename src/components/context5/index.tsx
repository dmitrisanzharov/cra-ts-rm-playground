import React from 'react';
import { createContext } from 'use-context-selector';

type Props = {}

export const UserContext = createContext<any>(null);

const Context5 = (props: any) => {

  const [user, setUser] = React.useState({ name: 'Alice', age: 30 });

  const ctxValue = React.useMemo(
    () => ({
      name: user.name,
      age: user.age,
      setAge: (age: number) => setUser(u => ({ ...u, age })),
      setName: (name: string) => setUser(u => ({ ...u, name })),
    }),
    [user.name, user.age]
  );

  return (
    <UserContext.Provider value={ctxValue}>{props.children}</UserContext.Provider>
  )
}

export default Context5