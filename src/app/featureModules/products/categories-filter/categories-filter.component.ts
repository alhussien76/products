import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss']
})
export class CategoriesFilterComponent implements OnInit {
  @Input() categories: string[] = []
  selectedCategories: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  categorySelected(category: string, event: any) {
    if (event.target.checked) {
      this.selectedCategories.push(category)
    }
    else {
      let index = this.selectedCategories.indexOf(category);
      this.selectedCategories.splice(index, 1);
    }
    console.log(this.selectedCategories)
  }
}
