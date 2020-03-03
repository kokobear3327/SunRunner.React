// pages/_app.js
import '../consumer/consumer.css';
import '../shared/consumer-dock/consumer-dock.css';
import '../shared/consumer-financials-buttons/balance-button.css';
import '../shared/tree-button/tree-button.css';
import '../shared/medical-info-button/medical-info-button.css';
import '../shared/lawyers-button/lawyers-button.css';
import '../shared/doctors-button/doctors-button.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}