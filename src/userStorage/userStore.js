import { createStore } from 'hooksy';

const defaultUser = { username: 'Foo' };

export const [useUserStore] = createStore(defaultUser);
