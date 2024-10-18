import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = Array(number).fill().map(createFakeContact);
  const allContacts = [...contacts, ...newContacts];
  await writeContacts(allContacts);
};

generateContacts(5);
