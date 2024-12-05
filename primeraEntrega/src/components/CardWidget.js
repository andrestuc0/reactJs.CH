import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCart size={24} />
      <span className="badge bg-secondary">100
      </span>
    </div>
  );
};

export default CartWidget;