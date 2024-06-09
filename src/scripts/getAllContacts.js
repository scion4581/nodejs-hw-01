import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {
        const contactsData = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(contactsData);
    } catch (err) {
      console.error('Помилка читання файлу:', err);
    }
};

console.log(await getAllContacts());
