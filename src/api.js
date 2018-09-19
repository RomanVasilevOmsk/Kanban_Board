export const fetchColumnsRequest = () => {
  return new Promise(resolve => {
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
        },
      });
    }, 1000);
  });
};

export const fetchCardsRequest = () => {
  return new Promise(resolve => {
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

export const fetchCommentsRequest = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          comments: [
            {
              id: 'qwqeff2',
              idCard: 'qwqeffg',
              author: 'Admin',
              text: 'Comment1',
            },
            {
              id: 'qwqeff3',
              idCard: 'fwrrhwr',
              author: 'Admin',
              text: 'Comment2',
            },
            {
              id: 'qwqeff4',
              idCard: 'rgnefrt',
              author: 'Admin',
              text: 'Comment3',
            },
            {
              id: 'qwqeff5',
              idCard: 'wewghts',
              author: 'Admin',
              text: 'Comment4',
            },
            {
              id: 'qwqeffg6',
              idCard: 'grhfdsa',
              author: 'Admin',
              text: 'Comment5',
            },
            {
              id: 'qwqeff6',
              idCard: 'hrglkoa',
              author: 'Admin',
              text: 'Comment7',
            },
          ],
        },
      });
    }, 1000);
  });
};
