
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App" ;
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import {Store} from "./ReduxStore/Store"



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<ChakraProvider>
<Provider store={Store}> 
<BrowserRouter>

<App/>

</BrowserRouter>
</Provider>
 </ChakraProvider>
);
