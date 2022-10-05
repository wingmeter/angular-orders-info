import { Component, OnInit } from '@angular/core'
import { orders } from '../../../data/orders'
import { Router } from '@angular/router'
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {
  constructor(private router: Router) {}

  total = orders.length

  data = orders

  navigateClick = () => {
    this.router.navigateByUrl('/navigator')
  }

  types = ['income', 'outcome', 'loan', 'investment']

  incomeCount = this.data.filter(el => el.type === this.types[0]).length
  outcomeCount = this.data.filter(el => el.type === this.types[1]).length
  loansCount = this.data.filter(el => el.type === this.types[2]).length
  investmentsCount = this.data.filter(el => el.type === this.types[3]).length

  ngOnInit(): void {}
}
