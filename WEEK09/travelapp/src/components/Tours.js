import Card from './Card'
function Tours(props) {
    const tours = props.tours;
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Trip Planner</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={props.removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;