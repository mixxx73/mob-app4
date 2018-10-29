import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../service/venues.service';
import { VenueModel } from '../model/venue';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})
export class VenuesPage implements OnInit {

  venues: any;//Array<VenueModel>;

  private perPage = 20;
  private page = 0;

  constructor(private venuesService: VenuesService) { 
    console.log('ok');  
    this.venues = [];
  }

  ngOnInit() {
    this.loadPage();
  }

  private loadPage()
  {
    this.venues = [];
    this.venuesService.getData('venue', this.perPage * (this.page - 1), this.perPage).subscribe(data => {
      this.venues = data;
    });

  }

  hasPrev()
  {
    return this.page > 0;
  }

  nextPage()
  {
    this.page += 1;
    this.loadPage();
  }

  prevPage()
  {
    this.page -= 1;
    this.loadPage();
  }
}
