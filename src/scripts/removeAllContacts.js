import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
    const emptyContacts = [];

    await writeContacts(emptyContacts);

    console.log('All contacts have been successfully removed.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

removeAllContacts();
