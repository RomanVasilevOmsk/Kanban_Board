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