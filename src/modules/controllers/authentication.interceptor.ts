import { Interceptor, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

@Interceptor()
export class AuthenticationInterceptor implements NestInterceptor {
  intercept(request, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    console.log('Test user logged...');

    if(request.headers['token']){
      //error
      console.log("User not connected. Good bye");
      return Observable.of('Error not authenticated');
    }

    return stream$;
  }
}
