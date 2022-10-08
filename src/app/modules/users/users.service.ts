import repository from './users.repository';
import { IDTOUser } from './users.dto';

const index = async () => {
  const entity = await repository.findAll();
  return entity;
};

const store = async (dto: IDTOUser) => {
  const entity = await repository.save(dto);
  return entity;
};

const show = async (id: any) => {
  const entity = await repository.findOne(id);
  return entity;
};

const update = async (id: any, dto: Partial<IDTOUser>) => {
  const entity = await repository.update(id, dto);
  return entity;
};

const destroy = async (id: any) => {
  const entity = await repository.destroy(id);
  return entity;
};

export default { index, store, show, update, destroy };
