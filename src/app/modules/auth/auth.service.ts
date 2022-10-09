import { Handling } from '@core/Handling';
import repository from '@modules/users/users.repository';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtEnv } from '@env/jsonwebtoken';
import { IDTOAuth } from './auth.dto';

const signin = async (dto: Omit<IDTOAuth, 'username' | 'avatar'>) => {
  const entity = await repository.findOneByEmail(dto.email);
  if (entity) {
    if (await compare(dto.password, entity.password)) {
      const token = jwt.sign({ sub: entity.id }, jwtEnv.secret, {
        expiresIn: jwtEnv.expiresIn,
      });
      return {
        user: {
          username: entity.username,
          email: entity.email,
        },
        token,
      };
    }
  }
  throw new Handling('Credentials incorrect', 401);
};
const signup = async (dto: IDTOAuth) => {
  const entity = await repository.save(dto);
  return entity;
};

export default { signin, signup };
