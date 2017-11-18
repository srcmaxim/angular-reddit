import {Component, HostBinding, Input, OnInit} from '@angular/core';

import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article;
  votedSignum: number = 0;

  constructor() {
  }

  voteUp(): boolean {
    if (this.votedSignum < 1) {
      this.article.voteUp();
      this.votedSignum++;
    }
    return false;
  }

  voteDown(): boolean {
    if (this.votedSignum > -1) {
      this.article.voteDown();
      this.votedSignum--;
    }
    return false;
  }

  color(): string {
    switch (this.votedSignum) {
      case 1: return 'green';
      case -1: return 'red';
    }
  }

  ngOnInit() {
  }

}
