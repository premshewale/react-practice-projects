
import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
   name : 'sqrt'
})
export class SqrtPipe implements PipeTransform {
   transform(val : number) : number {
      return Math.sqrt(val);
   }
}















// <b>Square root of 25 is: {{25 | sqrt}}</b>