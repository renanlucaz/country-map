import { useDispatch, useSelector } from 'react-redux';
import { 
    ComposableMap, 
    Geographies, 
    Geography, 
    ZoomableGroup
} from "react-simple-maps";
import { RootState } from '../../store';
import { openCountryModal, selectCountry } from '../../features/country/countrySlice';
import { Country } from './styles';

export function CountryMaps(): JSX.Element {
    const countryList = useSelector((state: RootState) => state.country.countryList)
    const dispatch = useDispatch()

    const openModal = (countryId: string) => {
      const country = countryList.find(item => item.id === countryId)

      if(country) {
        dispatch(selectCountry(country))
        dispatch(openCountryModal())
      }
  }

    const getFillColor = (countryId: string): string => {
        const countryActive = countryList.find(country => country.id === countryId)

        if(countryActive && countryActive.active) return '#003249'

        return '#ceeff4'
    }

    return (
        <ComposableMap height={550} width={900}>
          <ZoomableGroup center={[0, 0]} zoom={1}>
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Country isHoverOn={!!countryList.find(country => country.id === geo.id)}>
                    <Geography 
                      fill={getFillColor(geo.id)}
                      onClick={() => openModal(geo.id)}
                      strokeWidth={0.8}
                      stroke="#fff"
                      key={geo.rsmKey} 
                      geography={geo} 
                    />
                  </Country>
                ))
              }
              
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
    )
}