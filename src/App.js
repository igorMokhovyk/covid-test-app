import ChartComponent from "./components/ChartComponent";
import CountryFinder from "./components/CountryFinder";
import {useEffect} from "react";
import {connect} from "react-redux";
import { getGlobalStats} from "./Redux/action";
import TableComponent from "./components/TableComponent";


function App(props) {


  useEffect(() => {
    props.getGlobal()
  }, [])





  return (
    <>
      <CountryFinder/>
      <ChartComponent/>
      <TableComponent/>
    </>
  );
}


const mapStateToProps = (state) => ({
  global: state.global,
  country: state.country
})


const mapDispatchToProps = (dispatch) => ({
  getGlobal: () => dispatch(getGlobalStats()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
