export default class ProductRepository {
    public get() {
        return new Promise((resolve) => {
            resolve([
                {
                    name: 'Product 1',
                    price: 23.99,
                    image: 'https://i.etsystatic.com/13604493/r/il/2796c7/1945674623/il_fullxfull.1945674623_p0eo.jpg',
                    url: '',
                },
                {
                    name: 'Product 2',
                    price: 23.99,
                    image: 'https://i.etsystatic.com/15295640/r/il/e40f8b/1382134365/il_fullxfull.1382134365_e4a9.jpg',
                    url: '',
                },
                {
                    name: 'Product 3',
                    price: 23.99,
                    image: 'https://i.etsystatic.com/11640022/r/il/c9d430/833602796/il_fullxfull.833602796_e51e.jpg',
                    url: '',
                },
                {
                    name: 'Product 4',
                    price: 23.99,
                    image: 'https://i.etsystatic.com/12358024/r/il/c69ac8/1502995702/il_fullxfull.1502995702_t0cz.jpg',
                    url: '',
                },
                {
                    name: 'Product 5',
                    price: 23.99,
                    image: 'https://i.etsystatic.com/13604493/r/il/63a364/1894812550/il_fullxfull.1894812550_k6rc.jpg',
                    url: '',
                },
                {
                    name: 'Product 6',
                    price: 23.99,
                    image: 'https://i.etsystatic.com/6122716/r/il/73b1a4/998423280/il_fullxfull.998423280_2pf7.jpg',
                    url: '',
                },
            ]);
        });
    }
}
