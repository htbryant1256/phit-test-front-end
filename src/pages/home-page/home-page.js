import './home-page.css'
{/*Website Home Page*/ }

const HomePage = () => {
    return (
        <div className="Home-Page">
            <div className="Home-Page-Header">
                <div className="Home-Page-Header-Text">
                    Predictive Healthcare Infrastructure Tool

                </div>

            </div>


            <div className="Home-Page-Body">
                <div className="circle">
                    <div className="circle-text">
                        PHIT
                    </div>

                </div>
                <div className="login-input">
                    <div>
                        Username:&emsp;
                        <input type="text" name="Username" />
                    <div>
                    </div>
                        Password:&nbsp;&emsp;
                        <input type="text" name="Password" />
                    </div>

                </div>
                <div className="exit-text">
                    Exit
                </div>
                
            </div>


        </div>



    );


}

export default HomePage;


