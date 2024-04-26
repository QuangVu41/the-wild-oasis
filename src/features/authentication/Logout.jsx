import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { HiOutlineLogout } from "react-icons/hi";

function Logout() {
    const { logout, isLoading } = useLogout();

    return (
        <ButtonIcon disabled={isLoading} onClick={logout}>
            {isLoading ? <SpinnerMini /> : <HiOutlineLogout />}
        </ButtonIcon>
    );
}

export default Logout;
