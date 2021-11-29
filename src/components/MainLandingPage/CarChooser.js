import '../../App.css';

import image from "../../store/img/placeholder_image.png"

export const CarChooser = () => {

    let carList = [
        {
            name:'CHEVROLET SUBURBAN',
            year: '2020',
            seats: '6 seats',
            imgPath: image,
        },
        {
            name:'MERCEDES SPRINTER',
            year: '2020',
            seats: '6 seats',
            imgPath:image
        },
        {
            name:'LINCOLN MKZ SEDAN',
            year: '2020',
            seats: '6 seats',
            imgPath: image
        },
    ]

    
    const listItems = carList.map( (car) =>
        <div key={car.name}>
            <img alt={car.name} src={car.imgPath}/>
            <p>{car.name}</p>
            <p>{car.year} - {car.seats}</p>
            <a href="/vehicle">More Info</a>
        </div>
    );


    return (
        <div style={{ display: "inline-grid" }}>
            <h1  >CHOOSE FROM OUR VEHICLES</h1>
            <div className='background-image'>
        
                <div style={{ flexDirection: "row", display: 'flex' }}>
                    {listItems}
                </div>

            </div>
        </div>
    );
}