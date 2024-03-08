import { useSelector } from 'react-redux';
import { 
    ComposableMap, 
    Geographies, 
    Geography 
} from "react-simple-maps";
import { RootState } from '../../store';

export function CountryMaps(): JSX.Element {
    const countryList = useSelector((state: RootState) => state.country.countryList)

    const getFillColor = (countryId: string): string => {
        const countryActive = countryList.find(country => country.id === countryId)

        if(countryActive && countryActive.active) return '#003249'

        return '#ceeff4'
    }

    return (
        <ComposableMap height={550} width={900}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography 
                  fill={getFillColor(geo.id)} 
                  strokeWidth={0.8}
                  stroke="#fff"
                  key={geo.rsmKey} 
                  geography={geo} 
                />
              ))
            }
          </Geographies>
        </ComposableMap>
    )
}