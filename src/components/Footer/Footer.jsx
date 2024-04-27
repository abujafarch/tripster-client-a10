import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#fcdfdf57] pt-16 pb-8">
            <footer className="footer p-10 text-base-content">
                <aside>
                    <div >
                        <NavLink to='/'><h1 className='text-[#2a9d8f] font-extrabold mb-3 text-4xl font-kaushan text-left'>Tripster</h1></NavLink>
                    </div>
                    <p className="font-mont font-medium">Tripster Tourism Ltd.<br />Exploring world for people since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <a className="link link-hover font-mont font-medium">Popular Places</a>
                    <a className="link link-hover font-mont font-medium">Sundarban</a>
                    <a className="link link-hover font-mont font-medium">Thailand</a>
                    <a className="link link-hover font-mont font-medium">Malaysia</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover font-mont font-medium">Mirpur 10 No. Road, Dhaka</a>
                    <a className="link link-hover font-mont font-medium">+111 222 369 45</a>
                    <a className="link link-hover font-mont font-medium">+123 456 789 11</a>
                    <a className="link link-hover font-mont font-medium">tripster@worldtour.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover font-mont font-medium">Facebook</a>
                    <a className="link link-hover font-mont font-medium">Instragram</a>
                    <a className="link link-hover font-mont font-medium">Twitter</a>
                </nav>
            </footer>
            <p className="px-2 text-center font-macondo font-semibold pb-3"> © 2024 Tripster Ltd, All Rights Reserved</p>
        </div>
    );
};
export default Footer;