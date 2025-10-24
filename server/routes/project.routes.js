import express from 'express'
    import projectCtrl from '../controllers/project.controller.js' 
    const router = express.Router()
    router.route('/projects').post(projectCtrl.create)
    router.route('/projects').get(projectCtrl.list)
    router.route('/projects').delete(projectCtrl.remove)
    router.param('projectId', projectCtrl.projectByID)
    router.route('/projects/:projectId').get(projectCtrl.read)
    router.route('/projects/:projectId').put(projectCtrl.update)
    router.route('/projects/:projectId').delete(projectCtrl.remove)

    export default router