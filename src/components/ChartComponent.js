import {Doughnut} from 'react-chartjs-2';
import {useEffect, useState} from "react";
import {connect} from "react-redux";


function ChartComponent(props) {

  // const countryConfirmed = +(props.country.map(el => el.TotalConfirmed).join())


  const [totalConfirmed, setTotalConfirmed] = useState()
  const [totalDeaths, setTotalDeaths] = useState()
  const [totalRecovered, setTotalRecovered] = useState()


  const countryConfirmed = +(props.country.map(el => el.TotalConfirmed).join())
  const countryDeaths = +(props.country.map(el => el.TotalDeaths).join())
  const countryRecovered = +(props.country.map(el => el.TotalRecovered).join())


  useEffect(() => {
    if (!props.global) {
      return null;
    } else {
      setTotalConfirmed(props.global.Global.TotalConfirmed)
      setTotalDeaths(props.global.Global.TotalDeaths)
      setTotalRecovered(props.global.Global.TotalRecovered)

    }
  }, [props.global])



  useEffect(() => {
    setTotalConfirmed(countryConfirmed)
    setTotalDeaths(countryDeaths)
    setTotalRecovered(countryRecovered)
  }, [props.country])


  return (
    <div>

      <Doughnut
        data={{
          labels: [`Infected ${totalConfirmed}`, `Recovered ${totalRecovered}`, `Death ${totalDeaths}`],
          datasets: [{
            label: '# of Votes',
            data: [totalConfirmed, totalRecovered, totalDeaths],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
          }]
        }}
        width={1000}
        height={300}
        options={{maintainAspectRatio: false}}
      />
    </div>

  )
}

const mapStateToProps = (state) => ({
  global: state.global,
  country: state.country
})


const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent);
