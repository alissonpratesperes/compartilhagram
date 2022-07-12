import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import Moment from '../../Models/Moment';
import Comment from '../../Models/Comment';

  export default class CommentsController {

    public async store({ request, response, params }: HttpContextContract) {
      const body = request.body();
      const momentId = params.momentId;

        await Moment.findOrFail(momentId);

          body.momentId = momentId;

      const comment = await Comment.create(body);

            response.status(201);

              return {
                message: "Comment submitted successfully!",
                data: comment
              }
    }

  }
