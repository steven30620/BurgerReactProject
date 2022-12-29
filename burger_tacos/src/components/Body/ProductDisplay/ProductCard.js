import 'BodyStyle/ProductDisplayStyle/ProductCard';

export default function ProductCard({ ProductInfo }) {
	return (
		<div className="productCard">
			<div className="productCard-header">
				<div className="productCard-name">{ProductInfo.name}</div>
				<div className="productCard-promo">{ProductInfo.promo}</div>
			</div>
			<div className="productCard-body">{ProductInfo.image}</div>
			<div className="productCard-footer">{ProductInfo.price}</div>
		</div>
	);
}
