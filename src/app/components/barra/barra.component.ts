import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";

@Component({
  selector: "app-barra",
  templateUrl: "./barra.component.html",
  styleUrls: ["./barra.component.css"]
})
export class BarraComponent implements OnInit {
  selectValue1: any;
  selectValue2: any;
  selectValue3: any;
  selectOneValue: boolean;
  selectTwoValue: any;
  selectThreeValue: any;

  ngOnInit() {
    this.openPage()
  }


  openPage() {
    this.selectOneValue = false;
    this.selectValue1  = '2'
    this.selectValue2  = '2'
    this.selectValue3 = '3'
    this.selectOne(this.selectValue1)
    this.selectTwo(this.selectValue2)
    this.selectThree(this.selectValue3)
    this.constroiGrafico();
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: Label[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: "Sales By  Month" ,
    backgroundColor:['rgba(54, 162, 235, 0.8)','rgba(54, 162, 235, 0.8)','rgba(54, 162, 235, 0.8)','rgba(54, 162, 235, 0.8)'],
    hoverBackgroundColor: ['rgba(54, 162, 235, 0.8)','rgba(54, 162, 235, 0.8)','rgba(54, 162, 235, 0.8)','rgba(54, 162, 235, 0.8)'] }
  ];

  constroiGrafico() {
    var value = this.selectThreeValue
    switch (value) {
      case 'morango':
          this.barChartData[0].data = [444,324,434,543]
        break;
      case 'laranja':
          this.barChartData[0].data = [500,312,321,5433]
        break;
      case 'picanha':
          this.barChartData[0].data = [4566,4234,4234,5345]
        break;
      case 'carnemoida':
          this.barChartData[0].data = [2010,2222,1111,4141]
        break;
      case 'camisamangalonga':
          this.barChartData[0].data = [2345,5313,5352,4444]
        break;
      case 'camiseta':
          this.barChartData[0].data = [4254,324,6454,2434]
        break;
      case 'bonebaseball':
          this.barChartData[0].data = [200,524,32,1231]
        break;
      case 'bonesport':
          this.barChartData[0].data = [321,326,423,3234]
        break;
      default:
        console.log('error');
    }
  }

  selectOne(value) {
    if(value == 1){
     this.selectOneValue = true
     this.selectValue2  = '3'
    } else if(value == 2){
     this.selectOneValue = false
     this.selectValue2  = '2'
    }
  }

  selectTwo(value) {
    if(value == 1){
      this.selectTwoValue = 'fruta'
    } else if(value == 2){
      this.selectTwoValue ='carne'
    } else if(value == 3){
      this.selectTwoValue = 'camisa'
    } else if (value == 4){
      this.selectTwoValue ='bone'
    }
  }

  selectThree(value) {
    if(value == 1){
      this.selectThreeValue = 'morango'
      this.constroiGrafico()
    } else if(value == 2){
      this.selectThreeValue ='laranja'
      this.constroiGrafico()

    } else if(value == 3){
      this.selectThreeValue = 'picanha'
      this.constroiGrafico()

    } else if (value == 4){
      this.selectThreeValue ='carnemoida'
      this.constroiGrafico()

    } else if (value == 5) {
      this.selectThreeValue ='camisamangalonga'
      this.constroiGrafico()

    } else if (value == 6) {
      this.selectThreeValue ='camiseta'
      this.constroiGrafico()

    } else if (value == 7) {
      this.selectThreeValue ='bonebaseball'
      this.constroiGrafico()

    } else if (value == 8) {
      this.selectThreeValue ='bonesport'
      this.constroiGrafico()

    }
  }

}
