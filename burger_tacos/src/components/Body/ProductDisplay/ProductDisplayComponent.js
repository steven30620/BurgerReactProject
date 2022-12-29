// import { useState } from 'react';
import 'BodyStyle/ProductDisplayStyle/ProductDisplay.scss';
import ProductCard from './ProductCard';

//state
function ProductDisplayComponent() {
	//comportement
	const menuList = [
		{
			id: 121,
			name: 'le premier menu ',
			promo: true,
			promoMessage: 'Promotion !',
			menuContenue: {
				principalProcuct: 'burger De zinzin',
				secondaryProduct: 'Frite maison',
				thirdProduct: 'Fanta ou Eau',
			},
			price: 9.99,
		},
		{
			id: 1251,
			name: 'le deuxieme menu ',
			promo: false,
			promoMessage: '',
			menuContenue: {
				principalProcuct: 'tacos De zinzin',
				secondaryProduct: 'salade maison',
				thirdProduct: 'Bierre ou Eau',
			},
			price: 12.99,
		},
		{
			id: 12161,
			name: 'le 4e menu ',
			promo: true,
			promoMessage: '3Jours restant !',
			menuContenue: {
				principalProcuct: 'burger De la maison',
				secondaryProduct: 'Frite maison',
				thirdProduct: 'Coca ou Eau',
			},
			price: 8.99,
		},
		{
			id: 1871,
			name: 'le 5e menu ',
			promo: false,
			promoMessage: '',
			menuContenue: {
				principalProcuct: 'Tacos De la maison',
				secondaryProduct: 'Frite maison',
				thirdProduct: 'Thé ou Eau',
			},
			price: 15.99,
		},
	];
	//affichage

	return (
		<div className="productDisplay">
			<div className="productDisplay-row">
				<div className="productDisplay-row-title">
					Notre séléction de menus
				</div>
				<div className="productDisplay-row-list">
					{menuList.map((menu) => (
						<ProductCard key={menu.id} ProductInfo={menu} />
					))}
				</div>
			</div>
			<div className="productDisplay-row">
				<div className="productDisplay-row-title">
					Notre séléction de burgers
				</div>
				<div className="productDisplay-row-list">
					{menuList.map((menu) => (
						<ProductCard key={menu.id} ProductInfo={menu} />
					))}
				</div>
			</div>
			<div className="productDisplay-row">
				<div className="productDisplay-row-title">
					Notre séléction de Tacos
				</div>
				<div className="productDisplay-row-list">
					{menuList.map((menu) => (
						<ProductCard key={menu.id} ProductInfo={menu} />
					))}
				</div>
			</div>
			<div className="productDisplay-row">
				<div className="productDisplay-row-title">
					Notre séléction de salades
				</div>
				<div className="productDisplay-row-list">
					{menuList.map((menu) => (
						<ProductCard key={menu.id} ProductInfo={menu} />
					))}
				</div>
			</div>
			<div className="productDisplay-row">
				<div className="productDisplay-row-title">
					Notre séléction de Desserts
				</div>
				<div className="productDisplay-row-list">
					{menuList.map((menu) => (
						<ProductCard key={menu.id} ProductInfo={menu} />
					))}
				</div>
			</div>
		</div>
	);
}

export default ProductDisplayComponent;
