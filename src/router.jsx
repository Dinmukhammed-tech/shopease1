import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop.jsx";
import ProductListPage from "./pages/ProductListPage/ProductListPage.jsx"; 
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper.jsx";
import ProductDetails from './pages/ProductListPage/ProductDetailPage/ProductDetails.jsx'
import { loadProductById } from "./routes/products.jsx";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<ShopApplicationWrapper />,
        children:[
            {
                path:"/",
                element:<Shop />
            },
            {
                path:"/women",
                element:<ProductListPage categoryType={'WOMEN'}/>
            },
            {
                path:"/men",
                element:<ProductListPage categoryType={'MEN'} />
            },
            {
                path:"/kids",
                element:<ProductListPage categoryType={'KIDS'} />
            },
            {
                path:"product/:productId",
                loader:loadProductById,
                element:<ProductDetails  />
            }
            
        ]
    }
    

]) 