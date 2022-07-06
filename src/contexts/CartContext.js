import React, { useContext,createContext, useState } from 'react';

// 1 - CREAR EL CONTEXTO
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

// STATE que le pasamos al useState
const initialState = {
	products: []
};

// 2 - CREAR EL COMPONENTE PROVIDER (CartProvider)
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const clear = () => {
        setCart([])
    };

	const totalProducts = () => {
		let total = 0;
		cart.forEach((item) => (total += item.cantidad));
		return total;
  
	};

	const removeItem = (id) => {
		setCart(cart.filter(products => products.id !== id))
	}

	const addItem = (item) => {
		const id = cart.findIndex(products => item.id === products.id);   // 0 -> 

		if (id !== -1) {
			const newArray = cart
			const newCant = cart[id].cantidad + item.cantidad
			newArray[id].cantidad = newCant
			setCart([...newArray])
			
		} else {
			setCart([
				...cart,
				item
			])
			
		}
		return cart;
	};
	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<CartContext.Provider value={{cart, setCart, clear, removeItem, addItem, totalProducts}}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</CartContext.Provider>
	);
};

/*
addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
removeItem(itemId) // Remover un item del cart por usando su id
clear() // Remover todos los items
isInCart: (id) => true|false

*/
