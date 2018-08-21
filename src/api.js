export const fetchColumnsRequest = (id, name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          columns: [
            {
              id: 1,
              columnName: 'TODO',
            },
            {
              id: 2,
              columnName: 'In Progress',
            },
            {
              id: 3,
              columnName: 'Testing',
            },
            {
              id: 4,
              columnName: 'Done',
            },
          ],
        }
      });
    }, 1000);
  });
};

export const fetchCardsRequest = (id, idColumn, cardName, author, description) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          cards: [
            {
              id: 'qwqeffg',
              idColumn: 2,
              cardName: 'Fixed style header',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {
              id: 'fwrrhwr',
              idColumn: 4,
              cardName: 'Change color footer',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {
              id: 'rgnefrt',
              idColumn: 2,
              cardName: 'Add ico ',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {
              id: 'wewghts',
              idColumn: 2,
              cardName: 'Fixed adding data',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {
              id: 'grhfdsa',
              idColumn: 1,
              cardName: 'Fixed navigation',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {
              id: 'hrglkoa',
              idColumn: 3,
              cardName: 'Styled slider',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
          ],
        },
      });
    }, 1000);
  });
};

// import axios from 'axios';
//
// axios.common.baseUrl = 'www.asdfasdf.ru/api/v1';
//
// export const fetchColumnsRequest = (id, name) => {
//     return axios.get(
//         '/user',
//         {
//             // headers
//         }
//     );
// };