// varialbels 
// create a data list for Employee objects:
var DataList =[];
var fullName= document.getElementById('fname');
var salary= document.getElementById('salar');
var address= document.getElementById('address');
var workHours= document.getElementById('w-hours');
var City= document.getElementById('city');
var addBtn=document.getElementById('add_btn');    
var Sum = document.getElementById('sum');


// class Employee() 
 class Employee {
     constructor(name,salary,id,address,city,workhours){
       
     
         this.name=name;
         this.salary=salary;
         this.id=id;
         this.address=address;
         this.city=city;
         this.workhours=workhours;
         this.date=new Date();
     }
       details(){
       return this.name+this.salary+this.workhours+this.id+this.address+this.city;
       
      }
 }
  






  
//secondary functions

//Joined At Method:
function empDate(d) {
  return d.getDay()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
 }

// change the total exprensses:
function getTotalSalaryExpensess(){
    let sum= 0;
    for(let i in DataList){
       sum+= DataList[i].salary;
    } 
       Sum.innerHTML= sum;
}

function Deletebtn(){
  let btn = document.getElementsByClassName('b-group');
      if(btn.length > 0){
        for(let x =0; x<btn.length;x++){
          
        btn[x].addEventListener('click',function(e){
      
            deleteEmployee(e.target.id.slice(4))});
    }
}
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


//Delete Employee:
function deleteEmployee(id){
  let newDataList=DataList.filter((i)=>i.id !==Number(id))
  DataList = newDataList;
  
  let tbody=document.getElementById("tBody");
  
  tbody.insertAdjacentHTML('afterend','<tbody id="tBody"> </tbody>');
  tbody.remove();

  // craete new object :
  let newTbody =document.getElementById("tBody");
  for( let v = 0 ; v < DataList.length ;v++){
   
    let x =`<tr>
    <td>${DataList[v].name}</td>
    <td>${DataList[v].salary}</td>
    <td>${DataList[v].workhours+' h'}</td>
    <td>${DataList[v].city}</td>
    <td>${empDate(DataList[v].date)}</td>
    <td><button type="button" class="btn btn-danger b-group" id="btn-${DataList[v].id}">Delete</button></td>
    </tr>`;
    newTbody.insertAdjacentHTML('beforeend', x);
    
  }
  let btn = document.getElementsByClassName('b-group');
      if(btn.length > 0){
        for(let x =0; x<btn.length;x++){
          
        btn[x].addEventListener('click',function(e){
      
            deleteEmployee(e.target.id.slice(4))});
    }
    }     

  // invok getTotalExpensses function:   
  getTotalSalaryExpensess();
  
  
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Add Employee:

function add(){
  let id;
  if(DataList.length == 0){
     id= DataList.length;  
  } else if(DataList.length > 0){
    id=DataList[DataList.length-1].id +1;
  }

  // craete new object from the class 
   let emp=new Employee(fullName.value,Number(salary.value),id,address.value,City.value,workHours.value);

   // push the new Employee to the dataList:
   DataList.push(emp);

  // invok getTotalExpensses function:
  getTotalSalaryExpensess();
  
  // Add new object to the Tabel :
  var tbody = document.getElementById('tBody');
  
  let x =`<tr>
  <td>${fullName.value}</td>
  <td>${Number(salary.value)}</td>
  <td>${workHours.value+' h'}</td>
  <td>${City.value}</td>
  <td>${empDate(emp.date)}</td>
  <td><button type="button" class="btn btn-danger b-group" id="btn-${emp.id}">Delete</button></td>
  </tr>`;
  tbody.insertAdjacentHTML('beforeend', x);
  // Delete the Employee  in the list Tabel accord to the Id:

 let btn = document.getElementsByClassName('b-group');
  if(btn.length > 0){
    for(let x =0; x<btn.length;x++){
      
    btn[x].addEventListener('click',function(e){
  
        deleteEmployee(e.target.id.slice(4))});
}
}
  
}

 // Add Button Event:
 addBtn.addEventListener('click',add);