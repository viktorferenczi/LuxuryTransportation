import '../../App.css';

import image from "../../store/img/placeholder_image.png"

export const CarChooser = () => {

    let carList = [
        {
            name:'CHEVROLET SUBURBAN',
            year: '2020',
            seats: '6 seats',
            imgPath:image
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


    return(
        <div>
            <h1 className="text" >CHOOSE FROM OUR VEHICLES</h1>
            <img src="https://static.wixstatic.com/media/5574c387a7fb4fa38b99b09526e24008.jpg/v1/fill/w_1908,h_545,al_c,q_85,usm_0.66_1.00_0.01/5574c387a7fb4fa38b99b09526e24008.webp"></img>
            <div style={{flexDirection:"row", display:'flex'}}>
                {listItems}
            </div>
        </div>
    );
}