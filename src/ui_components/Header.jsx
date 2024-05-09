import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
    return (
        <header>
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchOrder />
            <p>Mfadhili</p>
        </header>
    );
}

export default Header;