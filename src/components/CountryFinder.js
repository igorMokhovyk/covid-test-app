import {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import {connect} from "react-redux";
import {MenuItem} from "@material-ui/core";


function CountryFinder(props) {



  const [countrySearch, setCountrySearch] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChangeCountrySearch = (event) => {
    setSelectedCountry(event.target.value);
    props.getOneCountry(event.target.value)
  }


useEffect(() => {
  if (!props.global) {
    return null;
  } else {
    const allCountries = props.global.Countries.map(el => el.Country).sort();
    setCountrySearch(allCountries)
  }
}, [props.global])



  return (
    <form>
      <div>
        <TextField
          id="standard-select-country"
          select
          label="Select"
          value={selectedCountry}
          onChange={handleChangeCountrySearch}
          helperText="Please select your Country"
        >
          {countrySearch.map((option, index) => (
            <MenuItem
              key={index}
              value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  )
}


const mapStateToProps = (state) => ({
  global: state.global,

})


const mapDispatchToProps = (dispatch) => ({
  getOneCountry: (name) => dispatch({type: 'GET_ONE_COUNTRY', payload: name})
})

export default connect(mapStateToProps, mapDispatchToProps)(CountryFinder);
