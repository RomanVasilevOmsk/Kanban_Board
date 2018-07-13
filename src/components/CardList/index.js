import React from 'react';
import CardItem from '../CardItem';
import PropTypes from 'prop-types';

class CardsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cardData: JSON.parse(localStorage.getItem('mydata'))
      // cardData: [
      //   {
      //     id: 1,
      //     idColumn:2,
      //     cardName: 'Fixed style header',
      //   },
      //   {
      //     id: 2,
      //     idColumn:4,
      //     cardName: 'Change color footer',
      //   },
      //   {
      //     id: 3,
      //     idColumn:2,
      //     cardName: 'Add ico ',
      //   },
      //   {
      //     id: 4,
      //     idColumn:2,
      //     cardName: 'Fixed adding data',
      //   },
      //   {
      //     id: 5,
      //     idColumn:1,
      //     cardName: 'Fixed navigation',
      //   }
      //
      // ]
    };
  }

  saveToLocalStorage = () => {
    localStorage.setItem('mydata', JSON.stringify(this.state.cardData));

    const dataLocal = JSON.parse(localStorage.getItem('mydata'));
    console.log(dataLocal);
  };

  render() {
    //localStorage.setItem('mydata', JSON.stringify(this.state.cardData));

    return (
      <div className="cards-list__wrapper">
        <div className="cards-list">
          { this.state.cardData.filter(card => card.idColumn === this.props.columnId).map((card) =>
            <CardItem
              key={card.id}
              index={card.id}
              cardName = {card.cardName}
            />
          )}
        </div>
      </div>
    );
  }
}

CardsList.propTypes = {
  columnId: PropTypes.number.isRequired
};

export default CardsList;
