import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"]
})
export class CompanyComponent implements OnInit {
  newcom;
  editcom = false;
  newbra;
  curcomp = "";
  curbra;
  curbrapast;
  curcompObj;
  brashow = false;
  editbra = false;
  brancharray = [];
  companyarray = [
    { name: "Honda", branches: ["chennai", "mumbai"] },
    { name: "Hyundai", branches: ["delhi", "Madurai"] }
  ];

  constructor() {}

  ngOnInit() {}

  addComp(comp) {
    var ncom = { name: comp, branches: [] };
    this.companyarray.push(ncom);
    this.newcom = "";
  }
  deleteCom(comObj) {
    for (var i = 0; i < this.companyarray.length; i++) {
      if (this.companyarray[i].name == comObj.name) {
        this.companyarray.splice(i, 1);
      }
    }
  }
  editCom(comObj) {
    this.editcom = true;
    this.curcomp = comObj.name;
    this.curcompObj = comObj;
  }
  updateComp(curCom) {
    for (var i = 0; i < this.companyarray.length; i++) {
      if (this.companyarray[i].name == this.curcompObj.name) {
        this.companyarray[i].name = curCom;
      }
    }
    this.curcomp = "";
    this.curcompObj = {};
    this.editcom = false;
  }

  //Branches related functions

  popBranch(comp) {
    this.curcompObj = comp;
    this.brancharray = comp.branches;
    this.brashow = true;
    this.ngOnInit();
  }

  editBra(bra) {
    this.editbra = true;
   this.curbrapast = this.curbra = bra;
  }

  deleteBra(bra) {
    for (var i = 0; i < this.companyarray.length; i++) {
      if (this.companyarray[i] == this.curcompObj) {
        for (var j = 0; j < this.companyarray[i].branches.length; j++) {
          if (this.companyarray[i].branches[j] == bra) {this.companyarray[i].branches.splice(j,1);}
        }
      }
    }
  }

  addBra(bra) {
    for (var i = 0; i < this.companyarray.length; i++) {
      if (this.companyarray[i] == this.curcompObj) {
        this.companyarray[i].branches.push(bra);
      }
    }
    this.newbra ='';
    this.ngOnInit();
  }

  updateBra(bra){
    for (var i = 0; i < this.companyarray.length; i++) {
      if (this.companyarray[i] == this.curcompObj) {
        for (var j = 0; j < this.companyarray[i].branches.length; j++) {
          if (this.companyarray[i].branches[j] == this.curbrapast)
            this.companyarray[i].branches[j] = bra;
        }
      }
    }
    this.curbra = '';
    this.editbra = false;

  }
}
