import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss']
})
export class CategoriesFilterComponent implements OnInit {
  @Input() categories: string[] = [];
  @Output() categoriesEmitter: EventEmitter<string> = new EventEmitter();
  selectedCategory: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  categorySelected(category: string, event: any) {
    if (event.target.checked) {
      this.selectedCategory = category;
      this.categoriesEmitter.emit(category);
    }
    else {
      this.selectedCategory = '';
      this.categoriesEmitter.emit('');
    }

  }
}
