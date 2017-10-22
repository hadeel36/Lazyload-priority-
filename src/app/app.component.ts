import { Component } from '@angular/core';
import { ChartsService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	//Get all charts
	public charts = [];

  constructor( private _allCharts: ChartsService ) {
  	  	this.charts = [{barChartLabels:['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  	  					barChartType:'bar',
  	  					barChartLegend:true,
  	  					barChartData:[
  		    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  		    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  		  ]}, {barChartLabels:['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  	  					barChartType:'bar',
  	  					barChartLegend:true,
  	  					barChartData:[
  		    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  		    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  		  ]}]
  }

  ngOnInit() {
    this._allCharts.getAllCharts().subscribe( data => {
      console.log('hello');
      console.log(data);
    });
  }

  // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }
}
