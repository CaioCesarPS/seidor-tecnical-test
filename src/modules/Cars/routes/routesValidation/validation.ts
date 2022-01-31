import { Joi, Segments } from 'celebrate';

export const createCarSchema = {
    [Segments.BODY]: {
        color: Joi.string().required(),
        licencePlate: Joi.string().required(),
        carBrand: Joi.string().required(),
    }
};