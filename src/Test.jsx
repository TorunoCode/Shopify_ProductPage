import { motion } from "framer-motion";
import { useState } from "react";

function Test() {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: { opacity: 1, scale: 1 , x:800, transition: { typeof: "spring", stiffness: 2000, damping: 100 }},
    hidden: { opacity: 0, scale: 0.5 },
  };
  const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        // initial="hidden"
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen(open=>!open)}>Click</button>
    {/* <motion.ul></motion.ul> */}
    </div>
  );
}

export default Test;
