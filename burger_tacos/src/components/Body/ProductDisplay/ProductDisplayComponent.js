import { useState } from 'react';
import '../../../styles/BodyStyle/ProductDisplayStyle/ProductDisplay.scss';
import ProductCard from './ProductCard';
//state
function ProductDisplayComponent() {
	//comportement
	const [menuList, setMenuList] = useState([
		{
			name: 'le premier menu ',
			promo: 'PROMOTION !',
			menuContenue: {
				principalProcuct: 'burger De zinzin',
				secondaryProduct: 'Frite maison',
				thirdProduct: 'Fanta ou Eau',
			},
			price: 9.99,
		},
		{
			name: 'le deuxieme menu ',
			menuContenue: {
				principalProcuct: 'tacos De zinzin',
				secondaryProduct: 'salade maison',
				thirdProduct: 'Bierre ou Eau',
			},
			price: 12.99,
		},
		{
			name: 'le 4e menu ',
			promo: 'PROMOTION !',
			menuContenue: {
				principalProcuct: 'burger De la maison',
				secondaryProduct: 'Frite maison',
				thirdProduct: 'Coca ou Eau',
			},
			price: 8.99,
		},
		{
			name: 'le 5e menu ',

			menuContenue: {
				principalProcuct: 'Tacos De la maison',
				secondaryProduct: 'Frite maison',
				thirdProduct: 'Thé ou Eau',
			},
			price: 15.99,
		},
	]);
	//affichage

	return (
		<div className="productDisplay">
			<div className="productDisplay-menu">
				{menuList.map((menu) => (
					<ProductCard ProductInfo={menu} />
				))}
			</div>
			<div className="productDisplay-burger">
				<div>components des burger</div>
			</div>
			<div className="productDisplay-tacos">
				<div>components des tacos</div>
			</div>
			<div className="productDisplay-dessert">
				<div>components des dessert</div>
			</div>
			<div className="productDisplay-dessert">
				<div>components des dessert</div>
			</div>
		</div>
	);
}

export default ProductDisplayComponent;
