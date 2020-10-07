import { Component } from '@angular/core';
import { flatten } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calC';

  fop = 0.0;
  sop = 0.0;
  arithmetic = false;
  Add = false;
  Sub = false;
  Mul = false;
  Div = false;
  currentval1 = null;
  currentval2 = null;
  currentval3 = null;
  fok = false;
  sok = false;
  temp = null;

  getNumber1() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 1;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 1;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getNumber2() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 2;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 2;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getNumber3() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 3;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 3;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getNumber4() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 4;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 4;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getNumber5() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 5;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 5;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getNumber6() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 6;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 6;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getNumber7() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 7;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 7;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getNumber8() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 8;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 8;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;

     }
  }

  getNumber9() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 9;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 9;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getNumber0() {
    if (this.arithmetic === false) {
      this.fop = (this.fop * 10) + 0;
      this.currentval1 = this.fop.toString();
      this.fok = true;
      this.sok = false;
    }

    else {
      this.sop = (this.sop * 10) + 0;
      this.currentval3 = this.sop.toString();
      this.fok = false;
      this.sok = true;
     }
  }

  getDecimal() {
    if (this.fok) {
      this.temp = this.fop.toString();
      this.temp = this.temp + '.';
      this.currentval1 = this.temp;
      this.fop = parseFloat(this.temp);
      this.temp = null;
      this.fok = false;
      this.sok = false;
    }
    else if (this.sok) {
      this.temp = this.sop.toString();
      this.temp = this.temp + '.';
      this.currentval3 = this.temp;
      this.sop = parseFloat(this.temp);
      this.temp = null;
      this.fok = false;
      this.sok = false;
    }
  }

  getOperationAdd() {
    if (this.fop !== 0 && this.sop === 0) {
      this.Add = true;
      this.Sub = false;
      this.Mul = false;
      this.Div = false;
      this.arithmetic = true;
      this.currentval2 = '+';
      this.fok = false;
      this.sok = false;

    }
  }

  getOperationSub() {
    if (this.fop !== 0 && this.sop === 0) {
      this.Sub = true;
      this.Add = false;
      this.Mul = false;
      this.Div = false;
      this.arithmetic = true;
      this.currentval2 = '-';
      this.fok = false;
      this.sok = false;

    }
  }

  getOperationMul() {
    if (this.fop !== 0 && this.sop === 0) {
      this.Mul = true;
      this.Sub = false;
      this.Add = false;
      this.Div = false;
      this.arithmetic = true;
      this.currentval2 = '*';

    }
  }

  getOperationDiv() {
    if (this.fop !== 0 && this.sop === 0) {
      this.Div = true;
      this.Sub = false;
      this.Mul = false;
      this.Add = false;
      this.arithmetic = true;
      this.currentval2 = '/';
      this.fok = false;
      this.sok = false;

    }
  }

  getResult() {
    if (this.Add) {
      this.fop = this.fop + this.sop;
      this.currentval1 = this.fop.toString();
      this.currentval2 = null;
      this.currentval3 = null;
      this.arithmetic = false;
      this.Add = false;
      this.sop = 0.0;
      this.fok = false;
      this.sok = false;
    }

    else if (this.Sub) {
      this.fop = this.fop - this.sop;
      this.currentval1 = this.fop.toString();
      this.currentval2 = null;
      this.currentval3 = null;
      this.arithmetic = false;
      this.Sub = false;
      this.sop = 0.0;
      this.fok = false;
      this.sok = false;
    }

    else if (this.Mul) {
      this.fop = this.fop * this.sop;
      this.currentval1 = this.fop.toString();
      this.currentval2 = null;
      this.currentval3 = null;
      this.arithmetic = false;
      this.Mul = false;
      this.sop = 0.0;
      this.fok = false;
      this.sok = false;
    }

    else if (this.Div) {
      this.fop = this.fop / this.sop;
      this.currentval1 = this.fop.toString();
      this.currentval2 = null;
      this.currentval3 = null;
      this.arithmetic = false;
      this.Div = false;
      this.sop = 0.0;
      this.fok = false;
      this.sok = false;
    }
  }

  clear() {
    this.currentval1 = null;
    this.currentval2 = null;
    this.currentval3 = null;
    this.arithmetic = false;
    this.Add = false;
    this.Sub = false;
    this.Mul = false;
    this.Div = false;
    this.fop = 0.0;
    this.sop = 0.0;
    this.fok = false;
    this.sok = false;
  }
}
