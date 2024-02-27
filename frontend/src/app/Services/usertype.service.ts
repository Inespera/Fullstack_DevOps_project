import { Injectable } from '@angular/core';
import { userType } from '../model/User/userType';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {
  private userTypes: userType[] = [
    {id:1,type:"Admin"},
    {id:2,type:"User"}
  ]
  constructor() { }

  getUserTypes():userType[]{
    return this.userTypes;
  }

  getLastId():number{
    return this.userTypes[this.userTypes.length-1].id
  }

  addType(newtype:string):void{
    var type : userType = {id: this.getLastId()+1, type: newtype}
    this.userTypes.push(type);
  }

  removeType(id:number):void{
    this.userTypes = this.userTypes.filter(userTypes => userTypes.id !== id)
  }

  getUserTypeById(id: number): userType {
    return this.userTypes.find(userType => userType.id === id)!;
  }
}
