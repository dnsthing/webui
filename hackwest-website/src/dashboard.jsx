import './App.css'



function getQueryCount() {
    
}

export default function Dashboard() {

    return (
        <>
        <div class = "main-content"> 
            <h1 class = "title-page">
                Dashboard
            </h1>
            <div class = "upper-data">
                <h2>
                    Queries Collected: {getQueryCount()}
                </h2>
            </div>
        </div>
        </>
    )
}
