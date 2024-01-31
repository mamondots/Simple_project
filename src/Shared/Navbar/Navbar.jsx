import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const navItem = [
        { id: 1, title: "Desitnations", to: "" },
        { id: 2, title: "Hotels", to: "" },
        { id: 3, title: "Flights", to: "" },
        { id: 4, title: "Bookings", to: "" },
        { id: 5, title: "Login", to: "" },
        { id: 6, title: "Sign up", to: "" }

    ]
    return (
        <div className="lg:px-28 md:px-20 px-12 py-8 relative z-10">
                <div className="flex items-center justify-between">

                      <div>
                        <h2 className="text-xl font-bold">MamonDots</h2>
                      </div>

                      <div className="lg:flex hidden items-center space-x-8">
                            <div className="flex items-center space-x-8">
                                 {
                                    navItem.map(nav => <li key={nav.id} className="list-none">
                                            <Link>
                                                    <p className="text-[#212832] font-medium hover:text-[#DF6951] duration-300">{nav.title}</p>
                                             </Link>
                                    </li>) 
                                 }
                            </div>

                            <div>
                                 <select className="outline-none bg-transparent">
                                    <option value="">ENG</option>
                                    <option value="">BNG</option>
                                    <option value="">IND</option>
                                 </select>
                            </div>
                      </div>

                      <div className="lg:hidden">
                          <p className="text-xl px-2 py-2 border"><FiMenu /></p>
                      </div>

                </div>
        </div>
    );
};

export default Navbar;