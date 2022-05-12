import React from 'react';

class CardPokemon extends React.Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    const { name, type, averageWeight, image } = data;

    return (
      <div className='pokecard'>
        <div className='pokeIMG'>
          <img src={image} alt='' srcset='' />
        </div>
        <div className='infos'>
          <p className='name'>{name}</p>
          <p className='type'>{type}</p>
          <p className='weight'>
            Weight:
            <span>{averageWeight.value}</span>
            <span>{averageWeight.measurementUnit}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default CardPokemon;
