import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser() {
        return { 'username' : 'Fadloovich', 'password' : '465563453%$#'}
    }
}
