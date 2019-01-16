const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        altText: 'a pair of socks',
        inStock: true,
        detales: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId   : 2243,
                variantColor: 'green'
            },
            {
                variantId   : 2235,
                variantColor: 'blue'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    }
});
