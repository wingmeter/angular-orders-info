import { Component, OnInit } from '@angular/core'
import { orders } from '../../../data/orders'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  constructor() {}
  data = orders

  types = ['income', 'outcome', 'loan', 'investment']

  incomeData = this.data.filter(el => el.type === this.types[0])
  outcomeData = this.data.filter(el => el.type === this.types[1])
  loansData = this.data.filter(el => el.type === this.types[2])
  investmentsData = this.data.filter(el => el.type === this.types[3])

  ngOnInit(): void {}
}
