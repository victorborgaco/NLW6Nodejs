import {Router} from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {ensureAdmin} from "./middlewares/ensureAdmin";
import {CreateComplimentController} from "./controllers/CreateComplimentController";
import {ensureAuthenticated} from "./middlewares/ensureAuthenticated";
import {ListUserReciveComplimentsController} from "./controllers/ListUserReciveComplimentsController";
import {ListUserSendComplimentsController} from "./controllers/ListUserSendComplimentsController";
import {ListTagController} from "./controllers/ListTagController";
import {ListUserController} from "./controllers/ListUserController";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReciveComplimentsController = new ListUserReciveComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listTagController = new ListTagController()
const listUserController = new ListUserController()

router.post('/users', createUserController.handle)
router.get('/users',ensureAuthenticated, listUserController.handle)


router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.get('/tags', ensureAuthenticated, listTagController.handle)

router.post('/login', ensureAdmin, authenticateUserController.handle)
router.post('/compliments', ensureAdmin, ensureAuthenticated, createComplimentController.handle)

router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle)
router.get('/users/compliments/receive', ensureAuthenticated, listUserReciveComplimentsController.handle)



export {router}
