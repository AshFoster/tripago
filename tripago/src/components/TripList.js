import { useState } from "react"
import { useFetch } from '../hooks/useFetch'

// Styles
import './TripList.css'

export default function TripList() {
    const [url, setUrl] = useState('https://3000-ashfoster-tripago-s91dio11d2c.ws-eu61.gitpod.io/tripss')
    const { data: trips, isPending, error } = useFetch(url)
        
    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            {isPending && <div>Loading trips...</div>}
            {error && <div>{error}</div>}
            <ul>
                {trips && trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('https://3000-ashfoster-tripago-s91dio11d2c.ws-eu61.gitpod.io/trips?loc=europe')}>
                    European Trips
                </button>
                <button onClick={() => setUrl('https://3000-ashfoster-tripago-s91dio11d2c.ws-eu61.gitpod.io/trips')}>
                    All Trips
                </button>
            </div>
        </div>
    )
}
