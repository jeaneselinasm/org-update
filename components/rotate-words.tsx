"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
 
export function RotateWords({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  text: string
  words: string[]
}) {
  const [index, setIndex] = React.useState(0)
 
React.useEffect(() => {
const interval = setInterval(() => {
setIndex((prevIndex) => (prevIndex + 1) % words.length)
}, 5000)
// Clean up interval on unmount
return () => clearInterval(interval)
}, [])
return (
 
<div className="text-3xl text-center sm:text-left sm:text-4xl  md:text-6xl md:leading-[4rem] w-full sm:mb-1 flex items-start justify-left mx-auto gap-5 ">
  {text}{' '}
  <AnimatePresence mode="wait">
    <motion.p
      key={words[index]}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
     
    >
      {words[index]}
    </motion.p>
  </AnimatePresence>
</div>
) }