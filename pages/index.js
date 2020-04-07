import  Stats  from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import Head from 'next/head';

export default function IndexPage(){
    return(
        <div>
       
            <Head>
                <title>Corona Update</title>
            </Head>
            <div>
                <div className="header"> 
                    <h1>Corona Case Update</h1>
                    <h3> Data Source: <a href="https://github.com/mathdroid/covid19">COVID-19 Global Data API</a> by <a href="https://twitter.com/MATHDROlD">@MATHDROlD</a></h3>
                </div>
                <div className='caseContainer'>
                    <div className="worldCases">
                        <h1>Worldwide Cases</h1>
                        <Stats url="https://covid19.mathdro.id/api"></Stats>
                    </div>
                    <div className="countryCases">
                        <h1>Cases by Country</h1>
                        <CountrySelector></CountrySelector>
                    </div>
                </div>
                <div className='footer'>
                   <p>Developed By: <a href="https://twitter.com/AndChurchville">@AndChurchville</a></p>
                    <p> Data Source: <a href="https://github.com/mathdroid/covid19">COVID-19 Global Data API</a> by <a href="https://twitter.com/MATHDROlD">@Mathdroid</a></p>
                </div>
            </div>
            
        </div>
       
       )
}