const   express =  require('express');
const   app     =  express();
const   router  =  express.Router();//Middleware
const   homeCont=  require('../controller/home_controller');
const   taskCont=  require('./task');

router.get('/', homeCont.home);
router.use('/task', taskCont);
router.post('/', homeCont.index);



module.exports = router;