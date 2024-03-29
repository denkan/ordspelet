import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, map } from 'rxjs';

export interface Store {
  wordSets: WordSet[];
  language: string;
}

export interface WordSet {
  id: string;
  title: string;
  words: string[];
}

@Injectable({ providedIn: 'root' })
export class StoreService {
  readonly data$ = new BehaviorSubject<Store>({
    wordSets: [],
    language: 'sv',
  });

  constructor() {
    this.readFromCache();
    this.data$.pipe(debounceTime(500)).subscribe(() => this.writeToCache());
  }

  get data() {
    return this.data$.value;
  }

  readonly wordSets$ = this.data$.pipe(map((data) => data.wordSets));
  readonly language$ = this.data$.pipe(map((data) => data.language));

  patch(partialData: Partial<Store>) {
    const newData = { ...this.data$.value, ...(partialData || {}) };
    this.data$.next(newData);
  }

  readonly cacheKey = 'data';

  writeToCache() {
    const dataJson = JSON.stringify(this.data);
    window.localStorage.setItem(this.cacheKey, dataJson);
  }

  readFromCache() {
    const dataJson = window.localStorage.getItem(this.cacheKey) || '{}';
    const dataObj = JSON.parse(dataJson);
    this.patch(dataObj);
  }
}
