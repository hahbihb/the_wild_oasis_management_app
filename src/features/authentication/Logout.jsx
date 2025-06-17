import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
  const { logout, isPending } = useLogout();

  return (
    <ButtonIcon onClick={logout} disabled={isPending}>
      {!isPending ? <HiArrowLeftEndOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
};

export default Logout;
