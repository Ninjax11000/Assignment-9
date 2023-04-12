import { getShoppingCart } from "../Utilities/Fakedb";

const cartProductsLoader= async ()=>{
    const loadedProducts=await fetch('/Jobs.json');
    const products =await loadedProducts.json();
    
    const storedCart= getShoppingCart();
    const savedCart=[];
    for(const id in storedCart){
        const addedProduct=products.find(pd=>pd.id===id);
        if(addedProduct)
        {
            const quantity= storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct);
        }
    }


    return savedCart;


}
export default cartProductsLoader;