import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

/**
 * Impure translate pipe, re-evaluated on every change detection cycle.
 * so it picks up language changes from LanguageService immediately.
 *
 * Usage: {{ 'nav.projects' | translate }}
 */
@Pipe({
  name: 'translate',
  pure: false,
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  private readonly langService = inject(LanguageService);

  transform(key: string): string {
    return this.langService.translate(key);
  }
}
