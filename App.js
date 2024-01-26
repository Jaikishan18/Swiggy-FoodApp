

import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/Shimmer";

// const heading = React.createElement("h3",{id:"heading"},"Jaikishan");

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

// console.log(heading)

// // JSX => React.CreateElement(object) ==> Render ==> HTML Element 
//      // JSX code is converted into ReactElemnt Code By using Babel 
//      // js compiler or transplier. And that React code is rendered on the DOM and 
//      // it becomes an HTML Element.

//      const JsxHeading = (<h1>
//         Its all about JSX
//         </h1>)

        // It is mandatatory to use paranthesis in multiple lines
        // jsx code. Not Necessary in a single line of jsx code.

   //   const root = ReactDOM.createRoot(document.getElementById("root"))

   //   root.render(JsxHeading)

    


          /*
             Header
               - Logo
               - nav items
             Body
               - search bar
               - Menu card container
                  * restro cards
                  * Images,rating,name of res, cusine,delivery time
              Footer
                - Links
                - Address
                - Contact   */
          const Cart = lazy(()=> import("./src/components/Cart"))
        
          const AppLayout = ()=>{
            return(
              <div className="app">
                <Header/>
                <Outlet/>
              </div>
            )
          }

          const root = ReactDOM.createRoot(document.getElementById("root"))

          const AppRouter = createBrowserRouter([
            {
              path:"/",
              element:<AppLayout/>,
              children:[
                {
                  path:"/",
                  element:<Body/>
                },
                {
                  path:"/about",
                  element:<About/>
                },
                {
                  path:"/contact",
                  element:<Contact/>
                },
                {
                  path:"/restaurants/:resId",
                  element:<RestaurantMenu/>
                },{
                  path:"/cart",
                  element:(
                  <Suspense fallback={<Shimmer/>}><Cart/></Suspense>
                  ) 
                }
          
              ],
              errorElement: <Error/>
            },
            
          ])

          root.render(<RouterProvider router = {AppRouter}/>)

          


