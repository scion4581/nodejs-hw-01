import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
      const contactsData = await fs.readFile(PATH_DB, 'utf8');
      const contacts = JSON.parse(contactsData);
      contacts.push(createFakeContact());
      await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
    } catch (err) {
      console.error('Помилка:', err);
    }
};

await addOneContact();
