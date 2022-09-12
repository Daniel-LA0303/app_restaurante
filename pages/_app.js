import '../styles/globals.css';
import { RestaurantProvider } from '../context/RestaurantProvider';

function MyApp({ Component, pageProps }) {
  return (
    <RestaurantProvider>
      <Component {...pageProps} />
    </RestaurantProvider>
  )
}

export default MyApp
