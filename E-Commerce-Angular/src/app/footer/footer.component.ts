import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  public customerStore:string | null;
  constructor(private router: Router) { 
    this.customerStore = localStorage.getItem('customer')
  }
  currentYear(): number {
    return new Date().getFullYear();
  }
  ngOnInit(): void {
    this.router.events.subscribe((res:any)=>{
      this.customerStore = localStorage.getItem('customer')
    })
  }
}
