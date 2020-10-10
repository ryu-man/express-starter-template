import { Router } from 'express'
const router = Router();

router.get('/', function (req, res, next) {
    // logic
});
router.post('/', function (req, res, next) {
    // logic
});
router.put('/', function (req, res, next) {
    // logic
});
router.delete('/', function (req, res, next) {
    // logic
});

export default expressApp => {
    /**
     * '/' is the main route that we are going to work on
     */
    expressApp.use('/', router);
};
