import repository from './users.repository';
import { IDTOUser } from './users.dto';

const index = async () => {
  const entity = await repository.findAll();
  return entity.map(user => ({ ...user, password: undefined }));
};

const store = async (dto: IDTOUser) => {
  const email = dto.email.toLowerCase();
  const entity = await repository.save({ ...dto, email });
  return { ...entity, password: undefined };
};

const show = async (id: any) => {
  const entity = await repository.findOne(id);
  return { ...entity, password: undefined };
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
