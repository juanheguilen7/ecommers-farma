import {stackMiddlewares} from "../src/middlewares/stackHandler";
import { withUser} from "../src/middlewares/withUser";

const middlewares = [withUser];
export default stackMiddlewares(middlewares);

