import { Component, OnInit, Input } from '@angular/core'; // 
import { Router } from '@angular/router';
import { Trip } from '../models/trip'; 

@Component({ 
  selector: 'app-trip-listing', 
  templateUrl: './trip-listing.component.html',  
  styleUrls: ['./trip-listing.component.css'],
})

export class TripListingComponent implements OnInit { 

  @Input('trip') trip: any;
  constructor(
    private router: Router
  ){}

  
  ngOnInit(): void {    
  } 
  private editTrip(trip: Trip): void {
    console.log('Inside TripListingComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  public isLoggedIn(): boolean {    
    return this.authenticationService.isLoggedIn();  
  } 
  
 } 
 