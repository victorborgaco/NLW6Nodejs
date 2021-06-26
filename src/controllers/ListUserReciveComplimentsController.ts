import {Request, Response} from "express";
import {ListUserReceiveComplimentsService} from "../services/ListUserReceiveComplimentsService";

class ListUserReciveComplimentsController {

    async handle(request: Request, response: Response) {
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService()

        const compliments = await listUserReceiveComplimentsService.execute(request.user_id)

        return response.json(compliments)
    }

}

export {ListUserReciveComplimentsController}
