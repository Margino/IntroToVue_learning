const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'The best brand',
        selectedVariant: 0,
        onSale: true,
        altText: 'a pair of socks',
        detales: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId   : 2243,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green.jpg',
                vartiantQuatnity: 10
            },
            {
                variantId   : 2235,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg',
                vartiantQuatnity: 0
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
        onSale: true
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].vartiantQuatnity
        },
        sale() {
          if (this.onSale) {
            return this.brand + ' ' + this.product + ' are on sale!'
          }
            return  this.brand + ' ' + this.product + ' are not on sale'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        }
    }
});
