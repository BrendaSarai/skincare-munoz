import React, { createContext, useState } from 'react';

// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();



// 2 - CREAR EL COMPONENTE PROVIDER (CartProvider)
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const clear = () => {
        setCart([])
    };

	const totalPay = () => {
		let total = 0;
		cart.forEach((item) => (total += item.quantity * item.price));
		return total;	
	}

	const totalProducts = () => {
		let total = 0;
		cart.forEach((item) => (total += item.quantity));
		return total;
  
	};

	const removeItem = (id) => {
		console.log(id)
		setCart(cart.filter(products => products.id !== id))
		console.log("cart2: ",cart)
	}

	const addItem = (item) => {
		const id = cart.findIndex(products => item.id === products.id);   // 0 -> 

		if (id !== -1) {
			const newArray = cart
			const newCant = cart[id].quantity + item.quantity
			newArray[id].quantity = newCant
			setCart([...newArray])
			const newStock = cart[id].stock - item.quantity
			newArray[id].stock = newStock
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
		<CartContext.Provider value={{cart, setCart, clear, removeItem, addItem, totalProducts, totalPay}}>
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
