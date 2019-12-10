import { Injectable } from '@angular/core';

@Injectable()
export class globalVariable {
  public loginState:boolean = false;
  public Order = {
    market1 : {
        orlderlist : []
    },
    market2 :  {
        orlderlist : {}
    },
    market3 :  {
        orlderlist : {}
    }
  }

}