const   express =  require('express');
const   app     =  express();
const   router  =  express.Router();//Middleware
const   task    =  require('../controller/task_controller');


router.get('/', task.task);

module.exports= router;