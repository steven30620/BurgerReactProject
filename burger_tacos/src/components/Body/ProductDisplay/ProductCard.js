import 'BodyStyle/ProductDisplayStyle/ProductCard.scss';
import menuImage from 'Assets/images/menu/chicken.png';

export default function ProductCard({ ProductInfo }) {
	// const isPromo = () => {
	// 	if (ProductInfo.promo === true) {
	// 		return (
	// 			<div className="productCard-header-promo">
	// 				{ProductInfo.promoMessage}
	// 			</div>
	// 		);
	// 	}
	// };

	return (
		<div className="productCard productCard-fade">
			<div className="productCard-header">
				<div className="productCard-header-name">
					{ProductInfo.name}
				</div>
			</div>
			<div className="productCard-body">
				<img
					className="productCard-body-image"
					src={menuImage}
					alt="burger"
				/>
			</div>
			<div className="productCard-footer">
				<div className="productCard-footer-price">
					{ProductInfo.price}€
				</div>
			</div>
		</div>
	);
}
