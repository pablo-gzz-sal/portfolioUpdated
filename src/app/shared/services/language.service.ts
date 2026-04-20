import { Injectable, signal } from '@angular/core';
import en from '../../../assets/i18n/en.json';
import es from '../../../assets/i18n/es.json';

export type Lang = 'en' | 'es';

type TranslationDict = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('en');

  private readonly dict: Record<Lang, TranslationDict> = { en, es };

  toggle(): void {
    this.lang.set(this.lang() === 'en' ? 'es' : 'en');
  }

  translate(key: string): string {
    const parts = key.split('.');
    let node: unknown = this.dict[this.lang()];
    for (const part of parts) {
      if (typeof node !== 'object' || node === null) return key;
      node = (node as TranslationDict)[part];
    }
    return typeof node === 'string' ? node : key;
  }
}
