
import Header from "../components/Header";
import Sidedbar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidedbar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;