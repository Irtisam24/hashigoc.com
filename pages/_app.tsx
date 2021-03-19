import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

// for preventing a font awesome bug where icons appear very large
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
