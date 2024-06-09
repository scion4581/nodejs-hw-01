import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(contactsData);
    const allowedContactsToLive = contacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(allowedContactsToLive), 'utf8');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await thanos();
