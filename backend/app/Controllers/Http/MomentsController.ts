import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Application from '@ioc:Adonis/Core/Application';
import { v4 as uuidv4 } from 'uuid';

import Moment from 'App/Models/Moment';

export default class MomentsController {
  private validationOptions = {
    types: ['image'],
    size: '20mb'
  };

    public async store({ request, response }: HttpContextContract) {
      const body = request.body();
      const image = request.file('image', this.validationOptions);

        if(image) {
          const imageName = `${uuidv4()}.${image.extname}`;

            await image.move(Application.tmpPath('uploads'), {
              name: imageName
            });

              body.image = imageName;
        }

      const moment = await Moment.create(body);

        response.status(201);

          return {
            message: "Moment created successfully!",
            data: moment
          }
    }

    public async index({ response }: HttpContextContract) {
      const moments = await Moment.all();

        response.status(200);

          return {
            data: moments
          }
    }

    public async show({ response, params }: HttpContextContract) {
      const moment = await Moment.findOrFail(params.id);

        response.status(200);

          return {
            data: moment
          }
    }

    public async destroy({ response, params }: HttpContextContract) {
      const moment = await Moment.findOrFail(params.id);

        await moment.delete();

        response.status(201);

          return {
            message: "Moment deleted successfully!",
            data: moment
          }
    }

}
