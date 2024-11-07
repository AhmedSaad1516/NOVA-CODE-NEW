import { Component } from '@angular/core';
import { HomeService } from '@app/home/services/home.service';
import { LanguageServiceService } from '@app/services-translate/language-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component {
dataPost:any[]=[]
lang:any

showScrollToTopButton = false;
loader:boolean=false
  constructor(private serv:HomeService,
    private languageService: LanguageServiceService,
    private translate: TranslateService
  ){

  }

  ngOnInit(): void {
    this.getAllPosts()

    this.lang = this.translate.currentLang || 'ar';
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang')!;
    }
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);

    this.updateHtmlLangAttr();
  }

  private updateHtmlLangAttr(): void {
    const htmlTag = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
  }

  getAllPosts() {
    this.loader = true;
    this.serv.getAllPost().subscribe((data: any) => {
      this.dataPost = data.posts.data;
      this.loader = false;
    });
  }
  getShortDescription(description: string): string {
    if (!description) return '';
    const words = description.split(' ');
    if (words.length <= 25) return description;
    return words.slice(0, 25).join('  ')  + '.....';
  }
scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
  this.showScrollToTopButton = false;
}
}



