import * as React from 'react';

const Home: React.FC<IHomeProps> = (props) => {

    return (
        <>
            <div id="home" className="row min-vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-12">
                    <div className="row text-center">
                        <div className="col-md-4 text-right border border-accent pl-5 pt-5 pb-5 my-auto shadow-lg">
                            <div className="display-4" >Home</div>
                        </div>
                        <div className="col-md-8 my-auto bg-navBigText">
                            <h6 className="font-weight-light my-auto py-3">Pawel Jaskolski - Software Developer</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export interface IHomeProps { }
export default Home;