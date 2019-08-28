import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-ssi',
  templateUrl: './dash-ssi.component.html',
  styleUrls: ['./dash-ssi.component.scss']
})
export class DashSsiComponent implements OnInit {
  c1title = '';
  c1type="ColumnChart";
  c1data = [
    ['SSI', 956, "B1", 950, 955, 967, "A1"],
    ['CSI', 928, "B1", 940, 932, 940, "A2"],
    ['ELead', {v: (950/5.2*4.2), f: "4.2%"}, "B1", {v: 950, f:"5.2%"}, {v: (950/5.2*2.8), f:"2.8%"},{v:(950/5.2*3), f:"3%"}, "A3"],
  ];
  c1columnNames = ["Type", 'Dealer', {type:"string", role: "annotation"}, 'Dist', "Reg", "Natl", {type:"string", role: "annotation"}];
  c1options = {    
    // colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], 
    // is3D: true,
    legend: {
      position: "top"
    }
   };
  constructor() { }

  ngOnInit() {
  }

}
