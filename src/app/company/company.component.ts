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
  cusfield;
  curcompObj;
  brashow = false;
  editbra = false;
  brancharray = [];
  CustomObjarr = [];
  companyarray = [
    { name: "Honda", branches: ["chennai", "mumbai"] },
    { name: "Hyundai", branches: ["delhi", "Madurai"] }
  ];

  cuskeyarray = [];
  newcusvaladd: string;

  constructor() {}

  ngOnInit() {}

  addComp(comp) {
    var ncom = { name: comp, branches: [],CustomObj:[]  };
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
          if (this.companyarray[i].branches[j] == bra) {
            this.companyarray[i].branches.splice(j, 1);
          }
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
    this.newbra = "";
    this.ngOnInit();
  }

  updateBra(bra) {
    for (var i = 0; i < this.companyarray.length; i++) {
      if (this.companyarray[i] == this.curcompObj) {
        for (var j = 0; j < this.companyarray[i].branches.length; j++) {
          if (this.companyarray[i].branches[j] == this.curbrapast)
            this.companyarray[i].branches[j] = bra;
        }
      }
    }
    this.curbra = "";
    this.editbra = false;
  }

  //Adding Custom field to Master Array

  updateMaster(cusfield) {
    for (var i = 0; i < this.companyarray.length; i++) {
      var obj = [{ key: cusfield, values: [] }];
      this.companyarray[i]["CustomObj"] = obj;
    }
    this.getObjKeys();
    this.cusfield = '';
    //this.getObjKeysfromObj(this.companyarray[0]);
    this.ngOnInit();
  }

  getObjKeys() {
    for (var j = 0; j < this.companyarray[0]["CustomObj"].length; j++) {
      this.cuskeyarray.push(this.companyarray[0]["CustomObj"][j].key);
    }

    console.log(this.cuskeyarray);
  }

  getObjKeysfromObj(comp) {
    for (var j = 0; j < comp["CustomObj"].length; j++) {
      this.cuskeyarray.push(this.companyarray[0]["CustomObj"][j].key);
    }
  }

  addCusVal(newcusvaladd, cuskey) {
    for (var i = 0; i < this.companyarray.length; i++) {
      if (this.companyarray[i].name == this.curcompObj.name) {
        for (var j = 0; j < this.companyarray[i]["CustomObj"].length; j++) {
          if (this.companyarray[i]["CustomObj"][j].key == cuskey) {
            this.companyarray[i]["CustomObj"][j].values.push(newcusvaladd);
          }
        }
      }
    }
    this.newcusvaladd = '';
  }
  getvalues(cuskey) {
    for (var i = 0; i < this.companyarray.length; i++) {
      if (this.companyarray[i].name == this.curcompObj.name) {
        for (var j = 0; j < this.companyarray[i]["CustomObj"].length; j++) {
          if (this.companyarray[i]["CustomObj"][j].key == cuskey) {
            return this.companyarray[i]["CustomObj"][j].values;
          }
        }
      }
    }
  }
}
