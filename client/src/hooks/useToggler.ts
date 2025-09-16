import { useState } from "react";

export default function useToggler() {
    const [open, setOpen] = useState(false);
    
    function toggler() {
      setOpen(!open)
    }
    return{open,toggler}
 }