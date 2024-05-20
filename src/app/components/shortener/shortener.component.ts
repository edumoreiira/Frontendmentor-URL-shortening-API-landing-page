import { Component } from '@angular/core';
import { ShortenerService } from '../../services/shortener.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Observable, shareReplay, take } from 'rxjs';
import { CommonModule } from '@angular/common';

export interface ShortenedLink{
  original_url?: string;
  result_url: string;
  error?: string;
}

@Component({
  selector: 'app-shortener',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ClipboardModule, CommonModule],
  providers: [ShortenerService],
  templateUrl: './shortener.component.html',
  styleUrl: './shortener.component.scss'
})


export class ShortenerComponent{
  
  constructor(private shortenerService: ShortenerService){
    
  }
  
  // shorten$?: Observable<ShortenedLink>;
  shortenedLinks: ShortenedLink[] = [];
  isLinkValid = true;
  error ?: string;
  

  generateLink(link: string){

    //stop request if current link is the same as a 
    // link that has already been shortened
    if(this.shortenedLinks.find(sLinks => sLinks.original_url === link)){

      this.isLinkValid = false;
      this.error = 'Link already shortened'
      return
    }


    this.shortenerService.getShorten(link).subscribe({
      next: (shorten: ShortenedLink) => {
      
      //removes last link if array of shortened links is higher or equal to 3
      if (this.shortenedLinks.length >= 3){
        this.shortenedLinks.shift();
      }

      shorten.original_url = link;
      this.isLinkValid = true;
      this.shortenedLinks.push(shorten);
    }, 

    error: (err) => {
      this.isLinkValid = false;
      this.error = link === '' ? 'Please add a link' : 'Please insert a valid link' 
  }})

  }
}
