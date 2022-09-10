import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchEmiiter: Subject<string> = new Subject();
  searchedWord$ = this.searchEmiiter.asObservable();
  constructor() { }
}
