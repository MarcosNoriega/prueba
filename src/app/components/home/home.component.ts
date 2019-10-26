import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor(private paisesService: PaisesService) {
    paisesService.getPaises().subscribe((res: any[]) => {
      this.paises.push(...res);
    });
   }

  ngOnInit() {
  }

}
