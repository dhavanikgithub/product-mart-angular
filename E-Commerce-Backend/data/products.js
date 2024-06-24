const products = [
    {
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        slug: 'fjallraven-foldsack-no-1-backpack-fits-15-laptops',
        price: 109.95,
        categories: "men's clothing",
        brand: 'Fjallraven',
        quantity: 50,
        color: 'Forest Green',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        size: 'L',
    },
    {
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        slug: 'mens-casual-premium-slim-fit-t-shirts',
        price: 22.3,
        categories: "men's clothing",
        brand: 'Generic',
        quantity: 100,
        color: 'Grey',
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        desc: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        size: 'M',
    },
    {
        title: 'Mens Cotton Jacket',
        slug: 'mens-cotton-jacket',
        price: 55.99,
        categories: "men's clothing",
        brand: 'Generic',
        quantity: 75,
        color: 'Olive',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        desc: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        size: 'L',
    },
    {
        title: 'Mens Casual Slim Fit',
        slug: 'mens-casual-slim-fit',
        price: 15.99,
        categories: "men's clothing",
        brand: 'Generic',
        quantity: 30,
        color: 'Black',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        desc: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        size: 'M',
    },
    {
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        slug: 'john-hardy-womens-legends-naga-gold-silver-dragon-station-chain-bracelet',
        price: 695,
        categories: 'jewelery',
        brand: 'John Hardy',
        quantity: 20,
        color: 'Gold & Silver',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        desc: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        size: 'One Size',
    },
    {
        title: 'Solid Gold Petite Micropave',
        slug: 'solid-gold-petite-micropave',
        price: 168,
        categories: 'jewelery',
        brand: 'Hafeez Center',
        quantity: 40,
        color: 'Gold',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        desc: 'Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.',
        size: 'S',
    },
    {
        title: 'White Gold Plated Princess',
        slug: 'white-gold-plated-princess',
        price: 9.99,
        categories: 'jewelery',
        brand: 'Generic',
        quantity: 100,
        color: 'White Gold',
        image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        desc: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        size: 'One Size',
    },
    {
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        slug: 'pierced-owl-rose-gold-plated-stainless-steel-double',
        price: 10.99,
        categories: 'jewelery',
        brand: 'Pierced Owl',
        quantity: 150,
        color: 'Rose Gold',
        image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        desc: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.',
        size: 'M',
    },
    {
        title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
        slug: 'wd-2tb-elements-portable-external-hard-drive-usb-3-0',
        price: 64,
        categories: 'electronics',
        brand: 'WD',
        quantity: 80,
        color: 'Black',
        image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        desc: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system.',
        size: '2TB',
    },
    {
        title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        slug: 'sandisk-ssd-plus-1tb-internal-ssd-sata-iii-6-gb-s',
        price: 109,
        categories: 'electronics',
        brand: 'SanDisk',
        quantity: 60,
        color: 'Black',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        desc: 'Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads. The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s.',
        size: '1TB',
    },
    {
        title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        slug: 'silicon-power-256gb-ssd-3d-nand-a55-slc-cache-performance-boost-sata-iii-2-5',
        price: 109,
        categories: 'electronics',
        brand: 'Silicon Power',
        quantity: 90,
        color: 'Black',
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        desc: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks.',
        size: '256GB',
    },
    {
        title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        slug: 'wd-4tb-gaming-drive-works-with-playstation-4-portable-external-hard-drive',
        price: 114,
        categories: 'electronics',
        brand: 'WD',
        quantity: 40,
        color: 'Black',
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        desc: 'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer\'s limited warranty.',
        size: '4TB',
    },
];
module.exports = products