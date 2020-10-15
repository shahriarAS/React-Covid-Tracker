import React, { useEffect, useState } from "react";
import axios from "axios";
import HTML from "./HTML";

const base = "https://covid19.mathdro.id/api/"

// const Require = {
//     death: "deaths",
//     confirmed: "confirmed",
//     recovered: "recovered",
//     death: "deaths",
// }

function Covid() {
    // const [data, setData] = useState({
    //     death: 0,
    //     recovered: 0,
    //     confirmed: 0
    // })

    const [full, setFull] = useState([])

    const [search, setSearch] = useState("")

    const [countryname, setCountryname] = useState("")

    // function CovidData() {
    //     axios
    //         .get(base)
    //         .then(response => { setData(prevdata => { return { ...prevdata, death: response.data.deaths.value, confirmed: response.data.confirmed.value, recovered: response.data.recovered.value } }) })
    //         .catch(err => { console.log(err) })
    // }

    function CovidDataCountry(country = "") {
        if (country.length > 1) {
            axios.get(`${base}countries/${country}/`)
                .then(response => { setFull(response.data) })
                .catch(err => console.log(err))
            console.log("Full is ", full)
        }
        else {
            axios.get(`${base}`)
                .then(response => { setFull(response.data) })
                .catch(err => console.log(err))
            console.log("Full is ", full)
        }
    }

    function onSubmit(event) {
        event.preventDefault()
        CovidDataCountry(search)
        setCountryname(search)
    }

    useEffect(() => {
        CovidDataCountry()
    }, [])

    return (
        <div>
            { full.confirmed && <HTML data={full} setsearch={setSearch} onsubmit={onSubmit} country={countryname} />}
        </div >
    )
}

export default Covid;