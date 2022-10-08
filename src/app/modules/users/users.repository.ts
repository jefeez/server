import { typeorm } from '@providers/typeorm';
import { User } from './users.model';
import { IDTOUser } from './users.dto';

const repository = typeorm.getRepository(User);

const findAll = async () => {
  const entity = await repository.find();
  return entity;
};

const save = async (dto: IDTOUser) => {
  const entity = await repository.save(repository.create(dto));
  return entity;
};

const findOne = async (id: any) => {
  const entity = await repository.findOne({ where: { id } });
  return entity;
};

const update = async (id: any, dto: Partial<IDTOUser>) => {
  const entity = await repository.update({ id }, dto);
  return entity;
};

const destroy = async (id: any) => {
  const entity = await repository.delete({ id });
  return entity;
};

export default { findAll, findOne, save, update, destroy };
