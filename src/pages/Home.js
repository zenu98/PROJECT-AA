import { NavermapsProvider } from "react-naver-maps";
import Map from "../components/Map";
function HomePage() {
  return (
    <NavermapsProvider
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
      // or finClientId, govClientId
    >
      <Map />
    </NavermapsProvider>
  );
}

export default HomePage;
