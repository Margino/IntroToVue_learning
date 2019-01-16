const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        altText: 'a pair of socks',
        inStock: false,
        detales: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId   : 2243,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green.jpg'
            },
            {
                variantId   : 2235,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
});
