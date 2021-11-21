import logo from '../../store/img/logo.png'

export const Header = () => {
    return(
        <div>
            <header style={{backgroundColor:'black', width:'100%', height:'15rem', flexDirection:'row', display:'flex', justifyContent:'space-between'}}>
                <img style={{width:'25rem', marginLeft:'2rem'}} src={logo} alt="Logo"/>
                <h3 style={{color:'white', fontSize:"4rem", fontFamily:'sans-serif'}}>Luxury Transportation</h3>
                <div style={{alignSelf:'flex-start', marginRight:'2rem'}}>
                    <p style={{color:'white'}}>fivestar-inc@hotmail.com</p>
                    <p style={{color:'white'}}>(305) 606-0139</p>
                    <div style={{flexDirection:'row', display:'flex', justifyContent:'space-between', marginTop:'5rem'}}>
                        <p style={{color:'white'}}>fb</p>
                        <p style={{color:'white'}}>google</p>
                        <p style={{color:'white'}}>googlemaps</p>
                    </div>
                </div>
            </header>
            <div style={{backgroundColor:'rgba(52, 52, 52, 0.4)', flexDirection:'row', display:'flex', width:"100%", zIndex:-2, justifyContent:'center'}}>
                <p style={{color:'white', marginLeft:'8rem', fontSize:22}}>Home</p>
                <p style={{color:'white', marginLeft:'8rem', fontSize:22}}>Events</p>
                <p style={{color:'white', marginLeft:'8rem', fontSize:22}}>Prices</p>
                <p style={{color:'white', marginLeft:'8rem', fontSize:22}}>Booking</p>
                <p style={{color:'white', marginLeft:'8rem', fontSize:22}}>Contact</p>
            </div>
        </div>
    );
}