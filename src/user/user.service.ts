import { Injectable, Req } from '@nestjs/common';
import { updateUserDTO } from './dto/update-user.dto';
import { createUserDTO } from './dto/create-user.dto';
@Injectable()
export class UserService {
    get() {
        return { 'username' : 'Fadloovich', 'password' : '465563453%$#'}
    }

    create(createUserDTO: createUserDTO) {
        console.log(createUserDTO);
    }

    update(updateUserDTO: updateUserDTO, userId: number) {
        return { updateUserDTO, userId };
    }

    getUser(userId: number) {
        return { userId };
    }

    delete(userId: number) {
        return { userId };
    }
}
