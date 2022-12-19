import { createBrowserRouter } from "react-router-dom";
import Countries from "../component/Countries";
import Country from "../component/Country";


export const route = createBrowserRouter([
    {
        path: '/',
        loader: async () => {
            return fetch('https://restcountries.com/v3.1/all')
        },
        element: <Countries ></Countries >
    },
    {
        path: '/country/:countryId',
        loader: async ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`),
        element: <Country></Country>
    }
])