import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try {
      const contactsData = await fs.readFile(PATH_DB, 'utf8');
      const contacts = JSON.parse(contactsData);
      return contacts.length;
    } catch (err) {
      console.error('Помилка:', err);
    }
};

console.log(await countContacts());
