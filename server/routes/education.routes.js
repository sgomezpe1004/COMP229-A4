import express from 'express'
    import qualificationCtrl from '../controllers/education.controller.js' 
    const router = express.Router()
    router.route('/qualifications').post(qualificationCtrl.create)
    router.route('/qualifications').get(qualificationCtrl.list)
    router.route('/qualifications').delete(qualificationCtrl.removeMany)
    router.param('qualificationId', qualificationCtrl.qualificationByID)
    router.route('/qualifications/:qualificationId').get(qualificationCtrl.read)
    router.route('/qualifications/:qualificationId').put(qualificationCtrl.update)
    router.route('/qualifications/:qualificationId').delete(qualificationCtrl.remove)

    export default router
