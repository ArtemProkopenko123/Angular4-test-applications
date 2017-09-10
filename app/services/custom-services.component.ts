import { Component  } from '@angular/core';
import { todos } from '../shared/data';



@Component({
  selector: 'app-custom-services',
  templateUrl: './custom-services.component.html',
  styleUrls: ['./custom-services.component.css']
})

 export class CustomServicesComponent  {
  
  tasksList: any[];
  filtered: boolean = false;
  sortResult: any[];
  show: boolean =true;
 
  constructor(){
    this.getTodos();
  }
  getTodos(){
    this.tasksList = todos;
    
  }

  sortByComplete(){
    let newTodos = this.tasksList;
    this.sortResult = [];
    for(let i = 0; i < newTodos.length; i++){
      if(this.tasksList[i].completed){
        let countRes = this.sortResult.length;
        if(countRes != 0){
          for(let k=1;k < countRes; k++){
            if(!this.sortResult[k].completed){
              this.sortResult.splice( (k), 0, this.tasksList[i] );
              break;
            }
          }
        } else {
          this.sortResult.unshift(this.tasksList[i]);
        }
      } else {
        this.sortResult.push(this.tasksList[i]);
      }
    }
    this.filtered = true;
    
  }

}

    
