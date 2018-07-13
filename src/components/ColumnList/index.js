import React from 'react';
import Column from '../Column';


class ColumnList extends React.Component {
  render() {
    const columnData = [
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
      }

    ];

    return (
      <div className="column-list__wrapper">
        <div className="column-list">
          { columnData.map((column) =>
            <Column
              key={column.id}
              columnId = {column.id}
              columnName = {column.columnName}
            />
          )}
        </div>
      </div>
    );
  }
}


export default ColumnList;
