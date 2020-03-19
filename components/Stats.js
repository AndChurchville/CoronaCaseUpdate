import useStats from '../utils/useStats';


export default function Stats({ url }){
    const {stats, loading, error} = useStats(url);
    if(loading){return <p>Loading...</p>}

    if (stats.confirmed && stats.deaths && stats.recovered){
        return (
            <div className="statContainer">
               <div className="statBlock confirmed">
                    <h3>Confirmed</h3>
                    <span>{stats.confirmed.value}</span> 
                </div>
                <div className="statBlock deaths">
                    <h3>Deaths</h3>
                    <span>{stats.deaths.value}</span>
                </div>
                <div className="statBlock recovered">
                    <h3>Recovered</h3>
                    <span>{stats.recovered.value}</span>
                </div>
            </div>
            )
        }
        return <h1>No Data Available</h1>
    };