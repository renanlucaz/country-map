import { createRef } from 'react';
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
import { Tooltip, tooltipClasses } from '@mui/material';

export function CountryMaps(): JSX.Element {
    const countryList = useSelector((state: RootState) => state.country.countryList)
    const ref = createRef<SVGPathElement>();
    const dispatch = useDispatch()

    const openModal = (countryId: string) => {
      const country = countryList.find(item => item.id === countryId)

      if(country) {
        dispatch(selectCountry(country))
        dispatch(openCountryModal())
      }
    }

    const isCountryActive = (countryId: string): boolean => {
        const countryActive = countryList.find(country => country.id === countryId)

        return !!(countryActive && countryActive.active)
    }

    const getCountryName = (countryId: string): string | undefined => {
      return countryList.find(country => country.id === countryId)?.countryName
    }

    return (
        <ComposableMap>
          <ZoomableGroup center={[0, 0]} zoom={1}>
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Tooltip 
                    title={getCountryName(geo.id)}
                    placement="top"
                    arrow
                    slotProps={{
                      popper: {
                        sx: {
                          [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                            {
                              marginTop: '0px',
                            },
                          [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                            {
                              marginBottom: '0px',
                            },
                          [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                            {
                              marginLeft: '0px',
                            },
                          [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                            {
                              marginRight: '0px',
                            },
                        },
                      },
                    }}
              
                  >
                    <Country isHoverOn={isCountryActive(geo.id)}>
                      <Geography 
                        fill={isCountryActive(geo.id) ? '#003249' : '#ceeff4'}
                        ref={ref}
                        onClick={() => openModal(geo.id)}
                        strokeWidth={0.5}
                        stroke="#fff"
                        key={geo.rsmKey} 
                        geography={geo} 
                      />
                    </Country>
                  </Tooltip>
                ))
              }
              
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
    )
}