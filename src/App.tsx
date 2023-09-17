import { motion } from "framer-motion"
import Button from "./components/Button";

const App: React.FC = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                className="text-9xl"
            >
                Hi, i'm Janek
            </motion.div>
            <Button className="m-10" buttonContent={'Read more'}/>
        </>
    );
}

export default App;