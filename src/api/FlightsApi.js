import host from '../common/host'

const getFlights = () => {
    return fetch(host + `/getFlights`)
}

const getBestFlights = (startDate, endDate) => {
    const startDateString = startDate.toISOString().split('T')[0]
    const endDateString = endDate.toISOString().split('T')[0]
    return fetch(host + `/getBestFlights?startDate=${startDateString}&endDate=${endDateString}`)
}

export {
    getFlights,
    getBestFlights
}