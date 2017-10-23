import { Component, HostListener } from '@angular/core';
import { ChartsService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	//Get all charts
	public charts = [];

  //Next chunk of data params
  public next: any;

  constructor( private _allCharts: ChartsService ) {}

  ngOnInit() {
    this._allCharts.getAllCharts().subscribe( data => {
      this.charts = data['data'];
      this.next = data['next'];
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const number =  window.scrollY;
      if (this.next!==null && number > 60) {
        console.log('hello');
        this._allCharts.getAllCharts(this.next).subscribe( data => {
          this.charts = this.charts.concat(data['data']);
          this.next = data['next'];
        });
      }
  }

  // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }
}
