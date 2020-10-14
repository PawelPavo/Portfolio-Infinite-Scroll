import * as React from 'react';

const ContactView: React.FC<IContactViewProps> = (props) => {

    return (
        <>
            <div id="contact" className="hero-image row min-vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-12">
                    <div className="row text-center">
                        <div className="col-md-4 text-right border border-accent pl-5 pt-5 pb-5 shadow-lg">
                            <div className="display-4" >Contact</div>
                        </div>
                        <div className="col-md-8 my-auto bg-navBigText">
                            <h6 className="font-weight-light my-auto py-3">Conatct me at pjpavo@gmail.com</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export interface IContactViewProps { }

export default ContactView;