import { Link } from 'react-router-dom';


const ContactUs = () => {
    return (
        <div className="col-lg-3">
            <div className="contact_us">
                <ul>
                    <div>
                    <li>
                        <h6>Phone Number</h6>
                        <span>000 222 444</span>
                    </li>
                    </div>
                    <div>
                    <li>
                        <h6>Email Address</h6>
                        <span>info@elimu.org</span>
                    </li>

                    </div>
                    <div>
                    <li>
                        <h6>Street Address</h6>
                        <span>online</span>
                    </li>
                    </div>
                    {/* <div>
                    <Link to='/contact_Us'>Contact Us</Link>
                    </div> */}
                </ul>
            </div>
        </div>





    );
}

export default ContactUs;