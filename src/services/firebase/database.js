import  {getfirestore} from "firebase/firestore"
import conexion from "./";

const db= getfirestore (conexion);
export default db;