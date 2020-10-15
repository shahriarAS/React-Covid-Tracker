import React from "react";
import CountUp from "react-countup";

function HTML(props) {
    const { data, setsearch, onsubmit, country } = props
    const date = new Date(data.lastUpdate).toISOString().substring(0, 10);

    return (
        <section class="text-gray-700 body-font">
            <div class="mr-6 my-2 text-center">
                <form onSubmit={onsubmit}>
                    <input type="search" class="bg-purple-white shadow rounded border-0 p-3" placeholder="Search by country name..." onChange={(event) => { setsearch(event.target.value) }} />
                    <input type="submit" class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded m-4" onClick={onsubmit} value="Search" />
                </form>
            </div>
            <div class="container px-5 py-5 mx-auto">
                {country ? <h2 class="tracking-widest text-xl title-font font-medium text-center text-gray-500 mb-1">{country}</h2> : <h2 class="tracking-widest text-xl title-font font-medium text-center text-gray-500 mb-1">Worldwide</h2>}
                <br />
                <div class="flex flex-wrap -m-3">
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-gray-500 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 class="tracking-widest text-s title-font font-medium text-white-500 mb-1">Confirmed Case in {country}</h2>
                            <CountUp start={0} end={data.confirmed.value} delay={0}>
                                {({ countUpRef }) => (
                                    <h1 ref={countUpRef} class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"></h1>
                                )}
                            </CountUp>
                            <h4 class="leading-relaxed mb-3">{date}</h4>
                            <p class="leading-relaxed mb-3">Number of active cases from COVID-19.</p>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-green-500 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 class="tracking-widest text-s title-font font-medium text-black-500 mb-1">Recovered Case in {country}</h2>
                            <CountUp start={0} end={data.recovered.value} delay={0}>
                                {({ countUpRef }) => (
                                    <h1 ref={countUpRef} class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"></h1>
                                )}
                            </CountUp>
                            <h4 class="leading-relaxed mb-3">{date}</h4>
                            <p class="leading-relaxed mb-3">Number of recovered cases from COVID-19.</p>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-red-200 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 class="tracking-widest text-s title-font font-medium text-gray-500 mb-1">Death Case in {country}</h2>
                            <CountUp start={0} end={data.deaths.value} delay={0}>
                                {({ countUpRef }) => (
                                    <h1 ref={countUpRef} class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"></h1>
                                )}
                            </CountUp>
                            <h4 class="leading-relaxed mb-3">{date}</h4>
                            <p class="leading-relaxed mb-3">Number of deaths cases from COVID-19.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HTML;