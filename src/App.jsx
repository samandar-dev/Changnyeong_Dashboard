import map from "./assets/images/map.png"
import Title from './companents/Title/Title';
import Weather from './companents/Weather/Weather';
import DateTime from './companents/DateTime/DateTime';
import TrafficInfo from './companents/TrafficInfo/TrafficInfo';
import VisitPopularity from "./companents/VisitPopularity/VisitPopularity";
import DailyPopularPlaces from "./companents/DailyPopularPlaces/DailyPopularPlaces";
import './App.scss';

function App() {
  return (
    <>
      <div className="app">
        <div className="rhino">
          <div className="left">
            <div>
              <Title />
              <Weather />
            </div>
            <TrafficInfo />
          </div>

          <div className="right">
            <DateTime />
            <VisitPopularity />
            <DailyPopularPlaces />
          </div>

          {/* <img className='map' src={map} alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default App;
