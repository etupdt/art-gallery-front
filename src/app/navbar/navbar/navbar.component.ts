import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service'

@Component({
  selector: 'art-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  searchValue: string =""

  ngOnInit(): void {
  }

  public onSearchButtonClick() {
    this.navbarService.getAllSearchProducts(this.searchValue)
  }

}
