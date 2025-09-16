import { useNavigate } from "react-router-dom";
export default function useNavigationUtility() {
    const navigate = useNavigate();

    return { navigate }
}