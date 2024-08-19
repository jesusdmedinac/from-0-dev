import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from "@maxister/chat/firebase/FirebaseInit";
import { useEffect, useState } from 'react';

export default function ProfileButton() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  function logout() {
    auth.signOut();
    window.location.href = "/";
  }

  return (
    <Menu>
      <MenuButton > 
        {
          user?.photoURL ? (
            <img className="rounded-full size-10" src={user?.photoURL} />
          ) : (<></>)
        }
      </MenuButton>
      <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="text-black border bg-white w-full rounded-lg py-4 px-4" onClick={logout}>Cerrar sesión</button>
          </MenuItem>
        </MenuItems>
    </Menu>
  )
}