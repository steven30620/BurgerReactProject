export default function Datas() {
	const data = [
		{
			menuList: [
				{
					name: 'le premier menu ',
					menuContenue: {
						principalProcuct: 'burger De zinzin',
						secondaryProduct: 'Frite maison',
						thirdProduct: 'Fanta ou Eau',
					},
				},
				{
					name: 'le deuxieme menu ',
					menuContenue: {
						principalProcuct: 'tacos De zinzin',
						secondaryProduct: 'salade maison',
						thirdProduct: 'Bierre ou Eau',
					},
				},
				{
					name: 'le 4e menu ',
					menuContenue: {
						principalProcuct: 'burger De la maison',
						secondaryProduct: 'Frite maison',
						thirdProduct: 'Coca ou Eau',
					},
				},
				{
					name: 'le 5e menu ',
					menuContenue: {
						principalProcuct: 'Tacos De la maison',
						secondaryProduct: 'Frite maison',
						thirdProduct: 'Thé ou Eau',
					},
				},
			],
			burgerList: ["l'original", 'Le bleu', 'le meridien', 'le turtle'],
		},
		//
	];
	return { data };
}
