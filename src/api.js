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
              comments: [
                {
                  id: 'qwqeff2',
                  author: 'Admin',
                  text: 'Comment1Вася',
                },
                {
                  id: 'qwqeff3',
                  author: 'Admin',
                  text: 'Comment3Петя',
                },
                {
                  id: 'qwqeff6',
                  author: 'Admin',
                  text: 'Comment44Даша',
                },
              ],
            },
            {
              id: 'fwrrhwr',
              idColumn: 4,
              cardName: 'Change color footer',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              comments: [
                {
                  id: 'qwq1ff2',
                  author: 'Admin',
                  text: 'Comment1Миша',
                },
                {
                  id: 'qwq2ff3',
                  author: 'Admin',
                  text: 'Comment3Серега',
                },
                {
                  id: 'qwq3ff6',
                  author: 'Admin',
                  text: 'Comment44Ваниш',
                },
              ],
            },
            {
              id: 'rgnefrt',
              idColumn: 2,
              cardName: 'Add ico ',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              comments: [
                {
                  id: 'qwa1ff2',
                  author: 'Admin',
                  text: 'Comment1Иваниш',
                },
                {
                  id: 'qws2ff3',
                  author: 'Admin',
                  text: 'Comment3Сергеич',
                },
                {
                  id: 'qwf3ff6',
                  author: 'Admin',
                  text: 'Comment44Валерка',
                },
              ],
            },
            {
              id: 'wewghts',
              idColumn: 2,
              cardName: 'Fixed adding data',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              comments: [
                {
                  id: 'qwfhff2',
                  author: 'Admin',
                  text: 'Comment1Антоха',
                },
                {
                  id: 'qwyiff3',
                  author: 'Admin',
                  text: 'Comment3Дениска',
                },
                {
                  id: 'qw,dff6',
                  author: 'Admin',
                  text: 'Comment44Владосик',
                },
              ],
            },
            {
              id: 'grhfdsa',
              idColumn: 1,
              cardName: 'Fixed navigation',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              comments: [
                {
                  id: 'qwa4hf2',
                  author: 'Admin',
                  text: 'Comment1Сашка',
                },
                {
                  id: 'qws2fwf3',
                  author: 'Admin',
                  text: 'Comment3Чебурашка',
                },
                {
                  id: 'qwf3f56',
                  author: 'Admin',
                  text: 'Comment44Тигранчик',
                },
              ],
            },
            {
              id: 'hrglkoa',
              idColumn: 3,
              cardName: 'Styled slider',
              author: 'Admin',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              comments: [
                {
                  id: 'qwa1ffa',
                  author: 'Admin',
                  text: 'Comment1Коалла',
                },
                {
                  id: 'qws2fq3',
                  author: 'Admin',
                  text: 'Comment3Семенчик',
                },
                {
                  id: 'qwf31f6',
                  author: 'Admin',
                  text: 'Comment44Вазгенчик',
                },
              ],
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