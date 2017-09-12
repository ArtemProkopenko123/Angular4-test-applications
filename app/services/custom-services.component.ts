import { Component  } from '@angular/core';
import { todos } from '../shared/data';



@Component({
  selector: 'app-custom-services',
  templateUrl: './custom-services.component.html',
  styleUrls: ['./custom-services.component.css']
})

 export class CustomServicesComponent  {
  
  tasksList: any[];
  sortResult: any[];

  constructor(){
    this.getTodos()
  }
  getTodos(){
    this.tasksList = todos; 
  }
  checkTypeOfValue(value){
    return typeof(eval("this.tasksList[0]."+value));
  }
  sortByComplete(value){
    if(this.tasksList.length > 0){
    //SORT IN ONE PARAMS NOT GOOD//
    let type:string = this.checkTypeOfValue(value);
    let newTodos = this.tasksList;
    this.sortResult = [];
    if(type == 'boolean'){
      // IF BOOLEAN //
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
      

        /* CHANGE todos NOT GOOD
          this.sortResult = this.tasksList;
          this.sortResult.sort((a,b) => a.completed - b.completed)
        */
      } else if(type == 'string') {
        // IF STRING //
        console.log('string');
        ///* CHANGE todos NOT GOOD ///  this.sortResult = newTodos.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} )
        
      }
    } else {alert("Data is undefined")}
  }
}

    
