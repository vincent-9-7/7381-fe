import React, { Component } from 'react';
import ShoppingCartItemDetails from './ShoppingCartItemDetails';
import Add from '../../assets/img/plus.svg';
import Remove from '../../assets/img/remove.svg';
import deletes from '../../assets/img/delete.svg';

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { price, shoppingcartQuantity, leftQuantity, soldQuantity, title, onRemove, onAdd, onDelete, size } =
      this.props;

    return (
      <ShoppingCartItemDetails
        price={price}
        shoppingcartQuantity={shoppingcartQuantity}
        leftQuantity={leftQuantity}
        soldQuantity={soldQuantity}
        title={title}
        size={size}
        removeButton={
          <button onClick={onRemove} type="button" className="cart__btn">
            <img src={Remove} alt="remove" className="cart__remove-btn-image" />
          </button>
        }
        addButton={
          shoppingcartQuantity >= leftQuantity ? (
            <button disabled onClick={onAdd} type="button" className="cart__btn-disable">
              <img src={Add} alt="add" className="cart__remove-btn-image" />
            </button>
          ) : (
            <button onClick={onAdd} type="button" className="cart__btn">
              <img src={Add} alt="add" className="cart__remove-btn-image" />
            </button>
          )
        }
        deleteButton={
          <button onClick={onDelete} type="button" className="cart__details--delete">
            <img src={deletes} alt="delete" style={{ height: '25px' }} />
          </button>
        }
      />
    );
  }
}
