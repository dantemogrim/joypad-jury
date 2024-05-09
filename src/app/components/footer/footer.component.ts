import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: ` <footer class="text-center">
    <ul class="inline-flex w-1/3 justify-between">
      <li>
        <a href="#"
          ><img class="w-12 p-2" src="/assets/facebook.svg" alt="Facebook"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img class="w-12 p-2" src="/assets/instagram.svg" alt="Instagram"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img class="w-12 p-2" src="/assets/reddit.svg" alt="Reddit"
        /></a>
      </li>
    </ul>
    <p class="pt-3 italic">© {{ year }}</p>
  </footer>`,
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
